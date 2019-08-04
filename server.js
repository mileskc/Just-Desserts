//___________________
//Dependencies
//___________________
const express = require('express');
const mongoose = require ('mongoose');
const app = express();
const methodOverride = require('method-override');
//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000;

//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/JustDesserts'

//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'))
app.use(methodOverride('_method'));

//Controllers
const mainController = require('./controllers/main.js')
app.use('/', mainController);
const bkController = require('./controllers/brooklyn.js')
app.use('/', bkController);

// Connect to Mongo
mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, () => {
	console.log('connected to mongo database')
});


//___________________
// Routes
//___________________
//localhost:3000
app.get('/' , (req, res) => {
  res.redirect('/justdesserts');
});


// seed data
// const seed = require('./models/seed.js');
// const Dessert = require('./models/desserts.js');
// app.get('/justdesserts/seedDesserts', (req, res) => {
//   Dessert.insertMany(seed, (err, createdDesserts) => {
//     // logs created users
//     console.log(createdDesserts);
//     // redirects to index
//     res.redirect('/justdesserts/alldesserts');
//   });
// });
//___________________
//Listener
//___________________
app.listen(PORT, () => console.log('Listening on port:', PORT));