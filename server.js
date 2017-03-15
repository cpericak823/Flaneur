// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Initialize Express
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static(path.join(__dirname, 'public')));

//Require external files
require("./app/components/utils/helper.js");
require("./routes/routes.js");

//Require db connection
var db = require("./controller/connection.js");

// Set the app to listen on port 3000
app.listen(3000, function() {
    console.log("App running on port 3000!");
});
