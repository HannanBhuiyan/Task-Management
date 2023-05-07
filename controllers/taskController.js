
const Task = require('../models/TaskModal')
const { validationResult } = require('express-validator')

const getTaskController = async (req, res) => {
     const tasklist = await Task.find().sort({_id: -1}).where('status').equals('new')
     return res.render('../views/dashboard/pages/list-task.ejs', {
          currentUrl: req.url,
          tasklist
     })
}

const taskCreateGetController = (req, res) => {
     return res.render('../views/dashboard/pages/add-task.ejs', 
     { 
          currentUrl: req.url,
          error: {}
     })
}

const postTaskController = async (req, res) => {
    const {taskName, taskDescription } = req.body
     let errors = validationResult(req).formatWith(err => err.msg)
     if(!errors.isEmpty()) {
          return res.render('../views/dashboard/pages/add-task.ejs', { 
               currentUrl: req.url,
               error: errors.mapped()
           })
     }
    try{
          let newTask =  new Task({
               taskName,
               taskDescription
          })
          await newTask.save()
          return res.redirect('/task/list')
    }
    catch(e) {
          res.status(500).send(e)
    }
}

const updateTaskController = async (req, res) => {

     const { taskName, taskDescription, status } = req.body

     try {
          const task = await Task.findById(req.params.id)
          task.taskName = taskName;
          task.taskDescription = taskDescription
          task.status = status
          task.save();
          return res.redirect('/task/list')
     }
     catch(e) {
          res.status(500).send(e)
     }
}

const deleteTaskController = async (req, res) => {
     try {
          await Task.findByIdAndDelete(req.params.id)
          return res.redirect('/task/list')
     }
     catch(e) {
          console.log(e)
     }
}

const getInprogressTaskController = async (req, res) => {
     const inprogressTask = await Task.find().sort({_id: -1}).where('status').equals('progress')
     return res.render('../views/dashboard/pages/progress-task.ejs', {
          currentUrl: req.url,
          inprogressTask
     })
}
const completedTaskController = async (req, res) => {
     const completedTask = await Task.find().sort({_id: -1}).where('status').equals('complete')
     return res.render('../views/dashboard/pages/complete-task.ejs', {
          currentUrl: req.url,
          completedTask
     })
}

const cancelTaskController = async (req, res) => {
     const cancelTask = await Task.find().sort({_id: -1}).where('status').equals('cancel')
     return res.render('../views/dashboard/pages/cancel-task.ejs', {
          currentUrl: req.url,
          cancelTask
     })
}


module.exports = {
     getTaskController,
     taskCreateGetController,
     postTaskController,
     updateTaskController,
     deleteTaskController,
     getInprogressTaskController,
     completedTaskController,
     cancelTaskController
}

