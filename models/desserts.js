const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const dessertSchema = Schema( {
    name: String,
    img: String,
    neighborhood: String,
    description: String,
    rating: Number
})


const Dessert = mongoose.model('Dessert', dessertSchema);

module.exports = Dessert;