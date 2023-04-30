const {body} = require('express-validator')
const User = require('../../models/UserModel')
module.exports = [
     body('username')
     .notEmpty()
     .withMessage('Username is required')
     .custom( async username => {
          let existsUsername = await User.findOne({username})
          if(existsUsername){
               throw new Error('Username already exists')
          }
     }), 

     body('email')
     .notEmpty()
     .withMessage("Email field is required")
     .isEmail()
     .withMessage('Enter a valid email')
     .custom(async email => {
          let existsEmail = await User.findOne({email})
          if(existsEmail){
               throw new Error('Email already exists')
          }
     }),
     body('password')
     .notEmpty()
     .withMessage('Password field is required'),
     body('phone')
     .notEmpty()
     .withMessage('Phone number is required'),
     body('confirm_password')
     .notEmpty()
     .withMessage('Confirm password is required')
]