require('dotenv').config()
const express = require('express')
const app = express()
const config = require('./config/config')
const setUpRoute = require('./routes/routes')
const setMiddleware = require('./middleware/middleware')
const port = config.app.port
require('./config/db');

 

app.set('view engine', 'ejs')
app.set('views', 'views')
// // console.log(process.env.NODE_ENV)
// console.log(app.get('env'))
 
setMiddleware(app)
 
setUpRoute(app)


app.use('*', (req, res) => {
     res.send("error")
})


app.listen(port, function(){
     console.log(`Server listening on port ${port}`);
})