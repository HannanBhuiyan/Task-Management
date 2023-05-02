const { 
     loginGetController, 
     signUpGetController, 
     signUpPostController, 
     loginPostController 
} = require('../controllers/AuthController')
const loginValidator = require('../validator/auth/loginValidator')
const registrationValidator = require('../validator/auth/registrationValidator')

const router = require('express').Router()


router.get('/', loginGetController)
router.post('/login', loginValidator, loginPostController)
router.get('/register', signUpGetController )
router.post('/register', registrationValidator  , signUpPostController )


module.exports = router