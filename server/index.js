var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get('/listings', function (req, res) {
  db.selectAll(req.body, function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
      console.log(data);
    }
  });
});


app.get('/images', urlencodedParser, function (req, res) {
  console.log('server /images')
  db.selectImages(req.body, function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
      console.log(data);
    }
  });
});

app.use('/:id', express.static(__dirname + '/../client/dist'));

app.listen(3003, function() {
  console.log('listening on port 3003!');
});

module.exports = app;