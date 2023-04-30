const { 
     loginGetController, 
     signUpGetController, 
     signUpPostController, 
     loginPostController 
} = require('../controllers/AuthController')
const loginValidator = require('../validator/auth/loginValidator')

const router = require('express').Router()


router.get('/', loginGetController)
router.post('/login', loginPostController)
router.get('/register', signUpGetController )
router.post('/register', loginValidator  , signUpPostController )


module.exports = router