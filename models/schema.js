// Require mongoose
var mongoose = require("mongoose");
var db = require("../controller/connection.js");

// Create the Schema class
var Schema = mongoose.Schema;

// Instantiate a new Schema with a title and link documents
var YelpApi = new Schema({
    // username: {
    //     type: String,
    //     trim: true,
    //     required: "Username is Required"
    // },
    // city: {
    //     type: String,
    //     trim: true,
    //     required: "Name is Required"
    // }, 
    attractions: [{
        name: String,
        latitude: Number,
        longitude: Number,
        imageurl: String
    }]
});

// This creates our model from the above schema, using mongoose's model method
var YelpData = mongoose.model("Article", YelpApi);

// Finally, we export the module, allowing server.js to hook into it with a require statement
module.exports = YelpData;
