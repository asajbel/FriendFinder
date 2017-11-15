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
	var matchIndex = friends.length;
	var loc = path.join(__dirname, "../data/friends.js");
	if(fs.existsSync(loc)){
		var matchValue = 50;
		friends = JSON.parse(fs.readFileSync(loc),"utf8");
		for(var i = 0; i < friends.length; i++) {
			var sum = 0;
			for(var j = 0; j < friends[i].scores.length; i++) {
				sum += Math.abs(parsInt(newFriend.scores[j] - friends[i].scores[j]));
			}
			if (sum < matchValue) {
				matchValue = sum;
				matchIndex = i; 
			}
		}
	}
	friends.push(newFriend);
	fs.writeFile(loc, JSON.stringify(friends), "utf8", function(err, res) {
		if (err) throw err;
	});
	return res.json(friends[matchIndex]);
});

module.exports = router;