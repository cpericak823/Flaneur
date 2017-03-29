// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var cookieParser = require('cookie-parser');
var session = require('cookie-session');
var passport = require('passport');
var mongoose = require('mongoose');
var LocalStrategy = require('passport-local').Strategy;

// Initialize Express
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());
app.use(session({keys: ['./secretKey']}));

// Static directory

//Require db connection
var db = require("./controller/connection.js");

var Account = require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

app.use(express.static(path.join(__dirname, 'public')));
require("./routes/api_routes.js")(app);
var nodemailer = require("./controller/nodemailer.js");

var login = require('./routes/login-routes');
app.use('/', login);


// Set the app to listen on port 3000
app.listen(3000, function() {
    console.log("App running on port 3000!");
});
