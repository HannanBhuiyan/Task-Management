const { 
     loginGetController, 
     signUpGetController, 
     signUpPostController, 
     loginPostController, 
     logoutController
} = require('../controllers/AuthController')
const { isUnAuthticated } = require('../middleware/authMiddleware')
const loginValidator = require('../validator/auth/loginValidator')
const registrationValidator = require('../validator/auth/registrationValidator')

const router = require('express').Router()


router.get('/', isUnAuthticated, loginGetController)
router.post('/login', isUnAuthticated, loginValidator, loginPostController)
router.get('/register', isUnAuthticated, signUpGetController )
router.post('/register', isUnAuthticated, registrationValidator  , signUpPostController )
router.get('/logout', logoutController)


module.exports = router