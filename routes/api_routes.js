var express = require("express");
var path = require("path");
var Yelp = require('yelp');
var schema = require("../models/schema.js");

var yelp = new Yelp({
    consumer_key: '8diW2VQILthhblqdNkbxDA',
    consumer_secret: 'O5Mo5MOmO-3Uv1XdrmjCtOjisrY',
    token: 'gfAGusgz1nnOIXYd65steP1ZpL5Hsnm4',
    token_secret: 'p4TCKLJeeoGBo4cej7M_iw4l2CU',
});

module.exports = function (app) {

    app.post("/search", function (req, res) {
        yelp.search({ term: 'attractions', location: req.body.city })
            .then(function (data) {
                var attractions = data.businesses.map(function (business) {
                    return {
                        
                        name: business.name,
                        latitude: business.location.coordinate.latitude,
                        longitude: business.location.coordinate.longitude,
                        imageurl: business.image_url,
                        // userId: req.user.id
                    }
                })
              
                schema.create({
                    attractions: attractions
                }, function (error, newmodel) {
                    if (error) {
                        console.log(error);
                    } else {
                      res.json(newmodel);
                }
                });
            })
            .catch(function (err) {
                console.error(err);
            });
    })
};