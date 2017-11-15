var express = require('express');
var router = express.Router();

// define the home page route
router.get('/friends', function (req, res) {
  return res.json(characters);
});
// define the about route
router.post('/friends', function (req, res) {
});

module.exports = router;