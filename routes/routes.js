const authRouter = require('./authRoute')
const dashboardRoute = require('./dashboardRoute')
const taskRoute = require('./taskRoute')
const contactRoute = require('./contactRoute')

const routes = [
     {
          path: '/contact',
          handler: contactRoute
     },
     {
          path: '/task',
          handler: taskRoute
     },
     {
          path: '/dashboard',
          handler: dashboardRoute
     },
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