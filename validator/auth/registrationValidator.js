const {body} = require('express-validator')
const User = require('../../models/UserModel')
module.exports = [
     body('username')
     .notEmpty()
     .withMessage('Username is required')
     .isLength({ max: 15})
     .withMessage('Username max lenght 15 characters')
     .custom( async username => {
          let existsUsername = await User.findOne({username})
          if(existsUsername){
               throw new Error('Username already exists')
          }
     })
     .trim(), 

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
     })
     .normalizeEmail(),
     body('password')
     .notEmpty()
     .withMessage('Password field is required')
     .isLength({min:5})
     .withMessage('Password min lenght 5 characters'),
     body('phone')
     .notEmpty()
     .withMessage('Phone number is required')
     .custom( async phone => {
          let existsphone = await User.findOne({phone})
          if(existsphone){
               throw new Error('Phone number already exists')
          }
     }),
     body('confirm_password')
     .notEmpty()
     .withMessage('Confirm password is required')
     .custom( (confirm_password, {req}) => {
          if(confirm_password !== req.body.password){
               throw new Error('Password does not match ')
          }
          return true
     }),
]