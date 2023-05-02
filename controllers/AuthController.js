
const User = require('../models/UserModel')
const bcrypt = require('bcrypt')
const saltRounds = 10
const  {validationResult} = require('express-validator') 

exports.signUpGetController = (req, res) => {
     return res.render('../views/dashboard/register.ejs', 
     {
          title: "Create new account",
          error: {},
          value: {}
     })
}

exports.signUpPostController = async (req, res) => {
    const { username, email, password, phone, confirm_password } = req.body
 
    const errors = validationResult(req).formatWith(error => error.msg)
     
    if(!errors.isEmpty()){
     return res.render('../views/dashboard/register.ejs', 
     {
          title: "Create new account",
          error: errors.mapped(),
          value: { username, email, password, phone , confirm_password}
     })
    }


    try {
          let hashPassword = await bcrypt.hash(password, saltRounds)
          const newUser = await new User({
               username,
               email,
               password: hashPassword,
               phone
          })

          await newUser.save();
          return res.redirect('/')
    }
    catch (error) {
          res.status(500).send(error.message)
    }

}

exports.loginGetController = (req, res, next) => {
     console.log(req.session.isLoggin, req.session.user)
     return res.render('../views/dashboard/login.ejs',
     {
          title: "Login account",
          error: {},
          value: {}
     });
}

exports.loginPostController = async (req, res, next) => {

     const {username, password} = req.body
     let user = await User.findOne({username}) 
     
     const errors = validationResult(req).formatWith(error => error.msg)
     
     if(!errors.isEmpty()){
      return res.render('../views/dashboard/login.ejs', 
      {
          title: "Login account",
          error: errors.mapped(),
          value: { username,password}
      })
     }
 

     req.session.isLoggin=true
     req.session.user=user
     
     console.log('loggind')
     
     return res.render('../views/dashboard/login.ejs',
     {
          title: "Login account",
          value: {},
          error: {}
     });
     


}

exports.logoutController = (req, res, next) => {

}