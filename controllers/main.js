const express = require('express');
const router = express.Router();
const Dessert = require('../models/desserts.js')

//main page
router.get('/justdesserts', (req, res) => {
    // res.send('main page')
    res.render('index.ejs')
})

//dessert index page
router.get('/justdesserts/alldesserts', (req, res) => {
    Dessert.find({}, (error, allDesserts) => {
        res.render('desserts/index.ejs', {
            desserts: allDesserts
        })
    })
})

router.get('/justdesserts/alldesserts/new', (req, res) => {
    res.render('desserts/new.ejs')
})

router.get('/justdesserts/alldesserts/:id', (req, res) => {
    Dessert.findById(req.params.id, (error, foundDessert) => {
        res.render('desserts/show.ejs', {
            dessert: foundDessert
        })
    })
    // res.send('show')
})

router.post('/justdesserts/alldesserts', (req, res) => {
    Dessert.create(req.body, (err, createdUser)=>{
        console.log(req.body.rating)
        res.redirect('/justdesserts/alldesserts');
    });
})

// app.get('/store', (req, res) => {
//     Product.find({}, (error, allProducts) => {
//         res.render('index.ejs', {
//             products: allProducts
//         })
//     })
//     // res.send('store index')
// })

// app.get('justdesserts/alldesserts/:id', (req, res) => {
//     res.send('show pages')
// })

// EXPORT
module.exports = router;