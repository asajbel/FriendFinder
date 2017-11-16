var express = require('express');
var router = express.Router();

var start = {root: __dirname + "/.."};
// define the home page route
router.get('/', function (req, res) {
  res.sendFile("/public/home.html", start);
});
// define the about route
router.get('/survey', function (req, res) {
  res.sendFile("/public/survey.html", start);
});

module.exports = router;