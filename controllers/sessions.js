const express = require('express');
const router = express.Router();

const User = require('../models/users.js');
const bcrypt = require('bcrypt');

router.get('/justdesserts/sessions/new', (req, res) => {
    res.render('sessions/new.ejs');
});

router.post('/justdesserts/sessions', (req, res)=>{
    User.findOne({ username: req.body.username },(err, foundUser) => {
        console.log(req.body)
        console.log(foundUser)
        if( bcrypt.compareSync(req.body.password, foundUser.password) ){
            req.session.currentUser = foundUser;
            res.redirect('/');
        } else {
            res.send('wrong password');
        }
    });
});

router.delete('/justdesserts/sessions', (req, res) => {
    req.session.destroy(()=>{
        res.redirect('/');
    });
})

module.exports = router;