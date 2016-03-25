var express = require('express');
var gulp = require('gulp');

var app = express();

app.get('/:api', function (req, res) {

  var api = req.params.api;
  require(`./action/${api}`)().then(function () {
    res.send(`exec ${api} over.`);
  });

});

app.get('/init', function (req, res) {
  res.send(`project is initialized.`);
});

app.get('/built', function (req, res) {
  res.send(`project is initialized.`);
});


app.listen(3000);