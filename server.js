// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 4545


// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// array of ninjas. Needs to be modularized to friends.js
var ninjas = [
	{
		"name": "Naruto",
		"photo": "https://pre00.deviantart.net/b59c/th/pre/f/2016/104/4/f/chibi_naruto_shippuden_by_marcinha20-d9yxwvl.png"
		"scores": [
			"1",
			"1",
			"1"
		]
	},
	{
		"name": "Sasuke",
		"photo": "https://pre00.deviantart.net/956e/th/pre/f/2015/312/e/7/chibi_sasuke_uchiha_sharingan_by_marcinha20-d9g0dce.png"
		"scores": [
			"5",
			"1",
			"5"
		]
	},
		{
		"name": "Hinata",
		"photo": "https://pre00.deviantart.net/0d56/th/pre/f/2016/223/b/2/chibi___hinata_the_last_by_marcinha20-d87eraj.png"
		"scores": [
			"5",
			"5",
			"5"
		]
	},
		},
		{
		"name": "Sakura",
		"photo": "https://pre00.deviantart.net/a0f8/th/pre/f/2016/311/9/f/chibi_sakura_movie_1_by_marcinha20-danoahm.png"
		"scores": [
			"4",
			"3",
			"4"
		]
	}

]//end of ninjas array


// Get route to root
app.get("/", function(req, res) {
  res.send("Welcome to FriendFinder!");
});

// Get route to survey questions
app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "survey.html"));
});

// Get route to list all friends
app.get("/api/friends", function(req, res) {
  res.json(ninjas);
});

app.post("/api/friends", function(req, res) {




  });



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
