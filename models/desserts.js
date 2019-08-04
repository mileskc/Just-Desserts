const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const dessertSchema = Schema( {
    name: String,
    img: [String],
    neighborhood: [String],
    borough: [String],
    addressBk: [String],
    addressQns: [String],
    addressMtn: [String],
    description: String,
    rating: Number,
    type: String
})


const Dessert = mongoose.model('Dessert', dessertSchema);

module.exports = Dessert;


//add page for each borough
//in loop, call key value pair for respective borough