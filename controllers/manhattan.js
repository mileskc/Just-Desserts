const express = require('express');
const router = express.Router();
const Dessert = require('../models/desserts.js')

//mahattan index page
router.get('/justdesserts/manhattan', (req, res) => {
    Dessert.find({}, (error, mtnDesserts) => {
        res.render('manhattan/index.ejs', {
            desserts: mtnDesserts
        })
    })
})

//bk show route
router.get('/justdesserts/manhattan/:id', (req, res) => {
    Dessert.findById(req.params.id, (error, foundDessert) => {
        res.render('manhattan/show.ejs', {
            dessert: foundDessert
        })
    })
    // res.send('show')
})

module.exports = router;