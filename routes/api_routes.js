var express = require("express");
var path = require("path");
var Yelp = require('yelp');
var schema = require("../models/schema.js");
//will eventually change this to user input
var location = "chicago";

var yelp = new Yelp({
  consumer_key: '8diW2VQILthhblqdNkbxDA',
  consumer_secret: 'O5Mo5MOmO-3Uv1XdrmjCtOjisrY',
  token: 'gfAGusgz1nnOIXYd65steP1ZpL5Hsnm4',
  token_secret: 'p4TCKLJeeoGBo4cej7M_iw4l2CU',
});

module.exports = function(app){
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
}),
app.get("/api/yelp", function (req, res) {
    yelp.search({ term: 'attractions', location: location })
        .then(function (data) {
            //return all the data (will need to adjust to display id, location)
            res.json(data.businesses);
        })
        .catch(function (err) {
            console.error(err);
        });
})
};