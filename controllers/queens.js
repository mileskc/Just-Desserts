const express = require('express');
const router = express.Router();
const Dessert = require('../models/desserts.js')

router.get('/justdesserts/queens', (req, res) => {
    Dessert.find({borough: { "$in" : ["Queens"]}}, (error, qnsDesserts) => {
        res.render('queens/index.ejs', {
            desserts: qnsDesserts,
            currentUser: req.session.currentUser
        })
    })
})

//bk show route
router.get('/justdesserts/queens/:id', (req, res) => {
    Dessert.findById(req.params.id, (error, foundDessert) => {
        res.render('queens/show.ejs', {
            dessert: foundDessert,
            currentUser: req.session.currentUser
        })
    })
    // res.send('show')
})

module.exports = router;