const express = require('express')
const app = express()
const port = 3001
const db = require('../db/index.js')
const bodyParser = require('body-parser')

//***************MIDDLEWARE**************\\

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))

//****************API CALLS**************\\

//GET request for photos from a given index
app.post('/photos', (req, res) => {
  // console.log(req)
  db.getListing(req.body.propId, (err, results) => {
    if (err) {
      res.send(400);
    } else {
      console.log(results)
      res.send(results);
      res.end()
    }
  });
});


//****************PORT OPENING**************\\
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
