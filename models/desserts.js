const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const dessertSchema = Schema( {
    name: String,
    img: String,
    borough: String,
    description: String,
    rating: Number
})


const Dessert = mongoose.model('User', dessertSchema);

module.exports = Dessert;