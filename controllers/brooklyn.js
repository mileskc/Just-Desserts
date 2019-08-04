const express = require('express');
const router = express.Router();
const Dessert = require('../models/desserts.js')

//brooklyn index page
router.get('/justdesserts/brooklyn', (req, res) => {
    Dessert.find({}, (error, bkDesserts) => {
        res.render('brooklyn/index.ejs', {
            desserts: bkDesserts
        })
    })
})

module.exports = router;