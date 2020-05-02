const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../db/index.js');

const app = express()
const port = 3001

app.use(express.static('client/dist'))

//***************MIDDLEWARE**************\\
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//****************API CALLS**************\\

//GET request for photos based on propId
app.get('/photos', (req, res) => {
  console.log(req.query)
  db.getListing(req.query.propId, (err, results) => {
    if (err) {
      res.send(400);
    } else {
      console.log(results)
      res.send(results);
      res.end()
    }
  });
});

//****************PORT OPENING**************\
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
