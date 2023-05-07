const setLocalsMiddleware  = () => {
     return (req, res, next) => {
          res.locals.user = req.user
          res.locals.isLoggin = req.session.isLoggin
          next()
     }
}

module.exports = {
     setLocalsMiddleware
}