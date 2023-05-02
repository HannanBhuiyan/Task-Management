const {body} = require('express-validator')
const User = require('../../models/UserModel')
const bcrypt = require('bcrypt')

module.exports = [
     body('username')
     .notEmpty()
     .withMessage('Username is required')
     .isLength({ max: 15})
     .withMessage('Username max lenght 15 characters')
     .custom( async username => {
          let existsUsername = await User.findOne({username})
          if(!existsUsername){
               throw new Error('Username not found')
          }
          return true
     })
     .trim(), 
     body('password')
     .notEmpty()
     .withMessage('Password field is required')
     .isLength({min:5})
     .withMessage('Password min lenght 5 characters')
     .custom( async (passowrd, {req}) => {
          let user = await User.findOne({username: req.body.username})
          if(user){
               let match = await bcrypt.compare(passowrd, user.password)
               if(!match){
                    throw new Error("Password does not match")
               }
          }
          return true
     }),
      
]