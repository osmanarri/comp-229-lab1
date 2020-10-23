let mongoose = require('mongoose');

// create a model class (Schema)
let bookModel = mongoose.Schema({
    title: String,
    author: String,
    year: Number,
    country: String,
    price: Number
},
{
    collection: "books"
});

module.exports = mongoose.model('Book', bookModel);