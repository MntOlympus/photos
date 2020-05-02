var faker = require('faker');
var db = require('./index.js')

//Set S3 Bucket URL
var url = 'https://mtnolympusimages.s3-us-west-1.amazonaws.com/'

//************SEED DATABASE****************\\

//Seed 100 listings each with 22 images
var seedDatabase = (url) => {
  for (var i = 0; i < 100; i++) {
    var imageArray = [];
    for (var j =0; j < 21; j++) {
      var newImage = createImage(url, i, j);
      imageArray.push(newImage)
    }
    addToDb(imageArray, i)
  }
  return;
}

//create a single image url with description
var createImage = (url, i, j) => {
  //create image description
  var description = faker.lorem.sentence();
  url = url + i + "/" + j;
  var newImage = {index:j, url: url + ".jpg", description: description};
  return newImage
}

//adds single listing to dataBase
var addToDb = (imageArray, index) => {
  var propId = index;
  var newListing = db.Listing ({propId:index, images: imageArray});
  newListing.save((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(index, 'success!');
    }
  })
}

seedDatabase(url);



