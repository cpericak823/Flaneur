var express = require("express");
var path = require("path");
var app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/public/index.html");
} )