const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const db = require("../db/index.js");

const app = express();
const port = 3003;

app.use(express.static("client/dist"));

//****************API CALLS**************\\

//GET request for photos based on propId
app.get("/photos", (req, res) => {
  db.getListing(req.query.propId, (err, results) => {
    if (err) {
      res.send(400);
    } else {
      console.log(results[0].images);
      res.send(results[0].images);
      res.end();
    }
  });
});

//****************PORT OPENING**************\
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
