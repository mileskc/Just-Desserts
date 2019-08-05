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

module.exports = router;