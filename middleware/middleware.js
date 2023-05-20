const express = require('express')
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session);
const config = require('../config/config')
const { bindUserWithRequest } = require('../middleware/authMiddleware')
const { setLocalsMiddleware } = require('../middleware/setLocalMiddleware')


 

const middleware = [
     express.urlencoded({ extended : true}),
     express.json(),
     express.static('public'),
     session({
          secret: process.env.SECRET_KEY || 'SECRET_KEY',
          resave: false,
          saveUninitialized: false,
          store: new MongoDBStore({
               uri: config.db.url,
               collection: 'session'
          })
     }),
    
     bindUserWithRequest(),
     setLocalsMiddleware()
]

module.exports = app => {
     middleware.forEach(m => {
          app.use(m)
     })
}

