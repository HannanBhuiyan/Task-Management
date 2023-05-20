const { 
     contactGetController, 
     contactCreateController, 
     contactPostController,
     contactEditController, 
     contactUpdateController, 
     contactDeleteController 
} = require('../controllers/ContactController');
const router = require('express').Router()
const upload = require('../middleware/uploadMiddleware')




router.get('/contactList', contactGetController);
router.get('/create', contactCreateController);
router.post('/post', upload.single('image'), contactPostController);
router.get('/edit/:id', contactEditController);
router.post('/update/:id', contactUpdateController)
router.get('/delete/:id', contactDeleteController)


module.exports = router;