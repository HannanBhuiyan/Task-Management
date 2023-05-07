
const User = require('../models/UserModel')

exports.bindUserWithRequest = () => {
     return async (req, res, next) => {
          if(!req.session.isLoggin){
               return next()
          }
          try {
               let user = await User.findById(req.session.user._id)
               req.user = user;
               next();
          }
          catch(error) {
               return res.send(error)
          }
     }
}

exports.isAuthenticated = (req, res, next) => {
     if(!req.session.isLoggin){
          return res.redirect('/')
     }
     next();
}


exports.isUnAuthticated = (req, res, next) => {
  if(req.session.isLoggin){
     return res.redirect('/dashboard')
    }
    next()    
}