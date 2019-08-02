const express = require('express');
const router = express.Router();

router.get('/justdesserts', (req, res) => {
    res.send('main page')
})

router.get('/justdesserts/alldesserts', (req, res) => {
    res.send('dessert index')
})

// app.get('justdesserts/alldesserts/:id', (req, res) => {
//     res.send('show pages')
// })

// EXPORT
module.exports = router;