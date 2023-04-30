const { Schema, Model, model } = require('mongoose')


const profileSchema = new Schema({
     user: {
          type: Schema.Types.ObjectId,
          ref: 'User',
          required: true 
     },
     title: {
          type: String,
          trim: true,
          maxLength: 50,
          required: true,
     },
     bio: {
          type: String,
          trim: true,
          maxLength: 400,
          required: true
     },
     links: {
          website: String,
          facebook: String,
          github: String,
          linkedin: String
     },

},{timestamps: true})

const Profile = model('Profile', profileSchema)
module.exports = Profile
