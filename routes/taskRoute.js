const { 
     getTaskController, 
     postTaskController, 
     updateTaskController, 
     deleteTaskController, 
     taskCreateGetController,
     getInprogressTaskController,
     completedTaskController,
     cancelTaskController
 } = require('../controllers/taskController')
const { isAuthenticated } = require('../middleware/authMiddleware')
const taskValidator = require('../validator/dashboard/taskValidator')

const router = require('express').Router()




router.get('/list', isAuthenticated, getTaskController)
router.get('/create', taskCreateGetController)
router.post('/create/post', isAuthenticated, taskValidator  ,postTaskController)
router.post('/update/:id', isAuthenticated, updateTaskController)
router.get('/delete/:id', isAuthenticated, deleteTaskController)

/**
 * @description inprogress task
 */


router.get('/progress', isAuthenticated, getInprogressTaskController)
router.get('/complete', isAuthenticated, completedTaskController)
router.get('/cancel', isAuthenticated, cancelTaskController)


module.exports = router