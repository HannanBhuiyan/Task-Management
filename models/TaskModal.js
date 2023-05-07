const {Schema, model} = require('mongoose')

const taskSchema = new Schema({
     taskName: {
          type: String,
          required: true
     },
     taskDescription:{
          type: String,
          required: true
     },
     status: {
          type: String,
          default: 'new',
          required: true,
     }
},{timestamps: true})

const Task = model('Task', taskSchema)
module.exports = Task