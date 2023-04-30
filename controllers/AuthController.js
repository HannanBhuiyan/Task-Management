
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
     return res.render('../views/dashboard/login.ejs',
     {
          title: "Login account"
     });
}

exports.loginPostController = async (req, res, next) => {

     const {username, password} = req.body
     
     const user = await User.findOne({username})
     if(!user) {
          return res.json({ message: "invalid user"})
     }

     let match = await bcrypt.compare(password, user.password)
     if(!match){
          return res.json({ message: "invalid password"})
     }

     console.log('loggin');
     return res.render('../views/dashboard/login.ejs',
     {
          title: "Login account"
     });
     


}

exports.logoutController = (req, res, next) => {

}