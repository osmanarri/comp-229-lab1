let mongoose = require('mongoose');

// create a model class (Schema)
// let bookModel = mongoose.Schema({
//     title: String,
//     author: String,
//     year: Number,
//     genre: String,
//     price: Number
// },
// {
//     collection: "books"
// });

// module.exports = mongoose.model('Book', bookModel);
let bookModel = mongoose.Schema({
    name: String,
    number: Number,
    email: String,
    // genre: String,
    // price: Number
},
{
    collection: "contactList"
});

module.exports = mongoose.model('Book', bookModel);