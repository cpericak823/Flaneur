// Require mongoose
var mongoose = require("mongoose");
var db = require("../controller/connection.js");

// Create the Schema class
var Schema = mongoose.Schema;
  passportLocalMongoose = require('passport-local-mongoose');

// Instantiate a new Schema with a title and link documents
var Account = new Schema({
    username: {
        type: String,
        trim: true,
        required: "Username is Required"
    },
    password: {
        type: String,
        trim: true,
        required: "Password is Required"
    }, 
    attractions: [{
        name: String,
        latitude: Number,
        longitude: Number,
        imageurl: String
    }]
});
Account.plugin(passportLocalMongoose);
// This creates our model from the above schema, using mongoose's model method
var Account = mongoose.model("Account", Account);

// Finally, we export the module, allowing server.js to hook into it with a require statement
module.exports = Account;
