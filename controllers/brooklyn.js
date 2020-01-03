const express = require('express');
const router = express.Router();
const Dessert = require('../models/desserts.js')

//brooklyn index page
router.get('/justdesserts/brooklyn', (req, res) => {
    Dessert.find({ borough: { "$in" : ["Brooklyn"]} }, (error, bkDesserts) => {
        res.render('brooklyn/index.ejs', {
            desserts: bkDesserts,
            currentUser: req.session.currentUser
        })
    })
})

//bk show route
router.get('/justdesserts/brooklyn/:id', (req, res) => {
    Dessert.findById(req.params.id, (error, foundDessert) => {
        res.render('brooklyn/show.ejs', {
            dessert: foundDessert,
            currentUser: req.session.currentUser
        })
    })
})

module.exports = router;