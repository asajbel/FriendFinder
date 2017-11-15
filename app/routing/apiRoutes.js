var express = require('express');
var router = express.Router();

// define the home page route
router.get('/friends', function (req, res) {
	var friends;
  // return res.json(friends);
});
// define the about route
router.post('/friends', function (req, res) {
});

module.exports = router;