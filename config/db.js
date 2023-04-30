const mongoose = require('mongoose');
const config = require('./config')
const db_url = config.db.url;
 
mongoose.connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
     console.log("connected")
})
.catch((error) => {
     console.log(error)
})

