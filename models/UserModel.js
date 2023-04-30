const {Schema, model } = require('mongoose')
const userSchema = new Schema({
     username: {
          type: String,
          trim: true,
          unique: true,
          maxLength: 15,
          required: [true, 'Username field is required']
     },
     email: {
          type: String, 
          unique: true,
          match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
          required: [true, 'Email field is required']
     },
     password: {
          type: String,
          minLength: 5,
          required: [true, 'Password field is required']
     },
     phone: {
          type: String,
          unique: true,
          required: [true, 'Phone number field is required']
     },
     profile_id: {
          type: Schema.Types.ObjectId,
          ref: 'Profile',
     },
     profilePics: {
          type: String,
          default: '/uploads/default.png'
     }
},{timestamps: true})

const User = model('User', userSchema);
module.exports = User