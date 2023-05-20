const setLocalsMiddleware  = () => {
     return (req, res, next) => {
          res.locals.user = req.user
          res.locals.isLoggin = req.session.isLoggin
          res.locals.message = req.session.message;
          delete req.session.message;
          next(); 
     }
}

module.exports = {
     setLocalsMiddleware
}