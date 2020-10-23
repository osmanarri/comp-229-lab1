let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our Book Model
let book = require('../models/book');


// get rout for the Book list page - read operation
router.get('/', (req, res, next) => {
    book.find((err, bookList) => {
        if (err){
            return console.error(err);
        }
        // console.log(bookList);
        res.render('book', {title: "Book List", BookList: bookList});
    });
});

module.exports = router;