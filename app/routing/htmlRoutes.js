var express = require('express');
var path = require("path");
var router = express.Router();

// define the home page route
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, "/app/public/home.html"));
});
// define the about route
router.get('/survey', function (req, res) {
  res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});

module.exports = router;