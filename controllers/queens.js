const express = require('express');
const router = express.Router();
const Dessert = require('../models/desserts.js')

router.get('/justdesserts/queens', (req, res) => {
    Dessert.find({}, (error, qnsDesserts) => {
        res.render('queens/index.ejs', {
            desserts: qnsDesserts
        })
    })
})

module.exports = router;