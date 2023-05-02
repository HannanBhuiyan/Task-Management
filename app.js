require('dotenv').config()
const express = require('express')
const app = express()
const config = require('./config/config')
const setUpRoute = require('./routes/routes')
const setMiddleware = require('./middleware/middleware')
const port = config.app.port
require('./config/db');
 
 

app.set('view engine', 'ejs')
app.set('views', 'views')
 
 
setMiddleware(app)
 
setUpRoute(app)

 
 
app.get('/dashboard', function(req, res){
     return res.render('../views/dashboard/dashboard.ejs', {
          currentUrl: req.url
     });
})

app.get('/new-task', (req, res) => {
     return res.render('../views/dashboard/pages/add-task.ejs', { currentUrl: req.url})
})

app.use('*', (req, res) => {
     res.send("error")
})


app.listen(port, function(){
     console.log(`Server listening on port ${port}`);
})