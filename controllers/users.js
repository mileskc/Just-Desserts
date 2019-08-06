const express = require('express');
const router = express.Router();
const User = require('../models/users.js');
const bcrypt = require('bcrypt');

router.get('/justdesserts/users/new', (req, res) => {
    res.render('users/new.ejs');
    // res.send('register')
});


//comment
//...farther down the page
// router.post('/', (req, res) => {
//     User.create(req.body, (err, createdUser)=>{
//         res.redirect('/');    
//     });
// });

//...farther down the page
router.post('/justdesserts/users', (req, res)=>{
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    User.create(req.body, (err, createdUser)=>{
        res.redirect('/justdesserts');
    });
});

module.exports = router;