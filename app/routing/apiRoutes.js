var express = require('express');
var path = require("path");
var fs = require("fs");
var router = express.Router();

var loc = path.join(__dirname, "../data/friends.js");

router.get('/friends', function(req, res) {
  return res.sendFile(loc);
});

router.post('/friends', function(req, res) {
  var newFriend = req.body;
  console.log(newFriend);
  var friends = [];
  var matchIndex = friends.length;
  var notNew = false;
  var loc = path.join(__dirname, "../data/friends.js");
  if (fs.existsSync(loc)) {
    var matchValue = 50;
    friends = JSON.parse(fs.readFileSync(loc), "utf8");
    for (var i = 0; i < friends.length; i++) {
      var sum = 0;
      if (newFriend.name.toLowerCase() !== friends[i].name.toLowerCase()) {
        var size = friends[i].scores.length;
        for (var j = 0; j < size; j++) {
          sum += Math.abs(parseInt(newFriend.scores[j]) - parseInt(friends[i].scores[j]));
        }
        if (sum < matchValue) {
          matchValue = sum;
          matchIndex = i;
        }
      } else {
        notNew = true;
      }
    }
  }
  if (!notNew) {
    friends.push(newFriend);
  }
  fs.writeFile(loc, JSON.stringify(friends, null, 2), "utf8", function(err, res) {
    if (err) throw err;
  });
  return res.json(friends[matchIndex]);
});

module.exports = router;