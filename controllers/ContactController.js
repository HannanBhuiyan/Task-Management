const Contact = require('../models/ContactModel')


const contactGetController = async (req, res) => {
     const allContacts = await Contact.find().sort({_id: -1})
     res.render('../views/dashboard/pages/contact/contact.ejs', 
     {
          currentUrl: req.url,
          allContacts
     })
}

const contactCreateController = (req, res) => {
     res.render('../views/dashboard/pages/contact/create-contact.ejs', 
     {
          currentUrl: req.url 
     })
}

const contactPostController = async (req, res) => {
     const {name, email} = req.body
     const image = `/uploads/${req.file.filename}`
     try {
          const newContact = new Contact({
               name,
               email,
               image
          })
          await newContact.save()
          req.session.message = {
               message: "Contact added successfully"
          }
          return res.redirect('/contact/contactList')
     }
     catch(e) {
          res.json({ message: "Error !"})
     }

}

const contactEditController = async (req, res) => {
     const { id } = req.params
     let contact = await Contact.findById({_id: id})
     res.render('../views/dashboard/pages/contact/edit-contact.ejs', {
          currentUrl: req.url,
          contact
     })
}

const contactUpdateController = (req, res) => {

}

const contactDeleteController = async (req, res) => {

     const {id} = req.params

     try {
          await Contact.findOneAndDelete({_id: id})
          req.session.message = {
               message: "Data delete success"
          }
          return res.redirect('/contact/contactList')
     }
     catch(e) {
          res.json({ message : "Error ! Data not deleted"})
     }


}


module.exports = {
     contactGetController,
     contactCreateController,
     contactPostController,
     contactEditController,
     contactUpdateController,
     contactDeleteController
}