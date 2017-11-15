var express = require('express');
var path = require("path");
var fs = require("fs");
var router = express.Router();

var loc = path.join(__dirname, "../data/friends.js");

router.get('/friends', function (req, res) {
		return res.sendFile(loc);
});

router.post('/friends', function (req, res) {
	var newFriend = req.body;
	console.log(newFriend);
	var friends = [];
	var loc = path.join(__dirname, "../data/friends.js");
	if(fs.existsSync(loc)){
		friends = JSON.parse(fs.readFileSync(loc),"utf8");
	}
	return res.json(friends[8]);
});

module.exports = router;