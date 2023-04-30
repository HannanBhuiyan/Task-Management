const authRouter = require('./authRoute')

const routes = [
     {
          path: '/',
          handler: authRouter
     }
]

module.exports = app => {
     routes.forEach(r => {
          app.use(r.path, r.handler)
     })
}