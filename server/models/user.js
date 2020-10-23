// require modules for the user Model
let mongoose = require('mongoose');
let passportLocalMongoose = require ('passport-local-mongoose');
// const { options } = require('../config/app');

let User = mongoose.Schema
(
    {
        username: 
        {
            type: String,
            default: "",
            trim: true,
            required: 'username is required'
        },
        
        password:
        {
            type: String,
            default: "",
            trim: true,
            required: 'password is required'
        },

        email:
        {
            type: String,
            default: "",
            trim: true,
            required: 'Email address is required'
        },
        displayName:
        {
            type: String,
            default: "",
            trim: true,
            required: 'Display name is required'

        },
        created:
        {
            type: Date,
            default: Date.now           

        },
        update:
        {
            type: Date,
            default: Date.now           

        }

    },
    {
        collection: "users"
    }
);

// configure options for user Model
let options = ({ missingPasswordError: "Wrong / Missing Password"});

User.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', User);