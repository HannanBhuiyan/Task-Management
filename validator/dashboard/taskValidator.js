const { body } = require('express-validator')



module.exports = [
     body('taskName')
     .notEmpty()
     .withMessage('Task name field is required'),

     body('taskDescription')
     .notEmpty()
     .withMessage('Task description is required')
]