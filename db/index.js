// var AWS = require('aws-sdk');
// var s3 = new AWS.S3();
var faker = require('faker');
var db = require('./index.js')
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mtnOlympus');

var listingSchema = mongoose.Schema({
  propId: Number,
  images: [{
    url: String,
    description: String}]
});

var Listing = mongoose.model('Listing', listingSchema);

module.exports  = {
  listingSchema,
  Listing
}
