var faker = require('faker');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mtnOlympus');

var listingSchema = mongoose.Schema({
  propId: Number,
  images: [{
    url: String,
    description: String}]
});

var Listing = mongoose.model('Listing', listingSchema);

var getListing = (index, callback) => {
  console.log('hell from getListing')
  var listing = Listing.find({propId: index}, {images:true}, (err,results) => {
    if (err) {
      callback(err, '')
    } else {
      callback(null, results)
    }
  })
}



module.exports  = {
  listingSchema,
  Listing,
  getListing
}

