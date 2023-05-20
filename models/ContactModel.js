const {Schema, model} = require('mongoose')
 
const contactSchema = new Schema({
     name: {
          type: String,
          required: true
     },
     email: {
          type: String,
          required: true
     },
     image: {
          type: String,
          required: true,
     }
}, { timestamps: true })


const Contact = model('Contact', contactSchema)
module.exports = Contact