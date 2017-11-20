// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// var friends = require("../data/friends");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 4545


// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// array of ninjas. Needs to be modularized to friends.js
var friends = [
	{
		routeName: "naruto",
		name: "Naruto",
		photo: "https://pre00.deviantart.net/b59c/th/pre/f/2016/104/4/f/chibi_naruto_shippuden_by_marcinha20-d9yxwvl.png",
		scores: [
			"1",
			"1",
			"1"
		]
	},
	{
		routeName: "sasuke",
		name: "Sasuke",
		photo: "https://pre00.deviantart.net/956e/th/pre/f/2015/312/e/7/chibi_sasuke_uchiha_sharingan_by_marcinha20-d9g0dce.png",
		scores: [
			"5",
			"1",
			"5"
		]
	},
		{
		routeName: "hinata",
		name: "Hinata",
		photo: "https://pre00.deviantart.net/0d56/th/pre/f/2016/223/b/2/chibi___hinata_the_last_by_marcinha20-d87eraj.png",
		scores: [
			"5",
			"5",
			"5"
		]
	},
		{
		routeName: "sakura",
		name: "Sakura",
		photo: "https://pre00.deviantart.net/a0f8/th/pre/f/2016/311/9/f/chibi_sakura_movie_1_by_marcinha20-danoahm.png",
		scores: [
			"4",
			"3",
			"4"
		]
	}

];//end of friends array


// Question set
var questions = [{
  question: "Life is serious all the time.",
  answer: [1, 2, 3, ,4 ,5],
}, {
  question: "You grew up with a lot of family around you.",
  answer: [1, 2, 3, ,4 ,5],
}, {
  question: "You'd rather play a prank on your teacher than listen to them lecture.",
  answer: [1, 2, 3, ,4 ,5],
}];



// Get route to root
app.get("/", function(req, res) {
  res.send("Welcome to FriendFinder!");
});


// Get route to home
app.get("/home", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/home.html"));
});

// Get route to survey questions
app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/survey.html"));
});

// Get route to friend name
app.get("/:name", function(req, res) {
    var chosen = req.params.name;

  if (chosen) {
    console.log(chosen);

    for (var i = 0; i < friends.length; i++) {
      if (chosen === friends[i].routeName) {
        return res.json(friends[i]);
      }
    }
    return res.json(false);
  }
  return res.json(name);
});

// Get route to list all friends
app.get("/api/friends", function(req, res) {
  res.json(friends);
});

app.post("/api/friends", function(req, res) {

var newFriend = req.body;
  // newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
  // console.log(newFriend);

  friends.push(newFriend);
  res.json(newFriend);

  //FIND MATCH

	  //loop through friends array
	  for (var i = 0; i < friends.length; i++){
	  	// console.log("friends:" + JSON.stringify(friends[i]));

	  		//calculate difference of each answer
	  		var difference = 0;
	  		var totalDifference = 4545;
	  		var matchName = "";
			var matchPhoto = "";
			var friendsScores = friends.scores;
			
				// console.log("friendScore: " + friendsScore);
				// console.log("newfriendScore: " + newfriendScore);

	  // 		for(var f = 0; f < [newFriend].length; f++) {
	  // 			var newfriendScores = newFriend[f].scores;
	  // 			difference += Math.abs(parseInt(friendsScores[i]) - parseInt(newfriendScores[f]));
	  // 		} //end: for loop newFriend.length
	  // 		console.log("difference: "+ difference);
	  // 		console.log("newfriendScores: "+newFriend[f].scores);

			// // lowest difference = match
			// // if (difference < totalDifference){
			// // 	matchName = friends[i].name;
			// // 	matchPhoto = friends[i].photo;

			// // 	console.log(
			// // 		"match name: " + friends[i].name +
			// // 		"match photo: " + friends[i].photo
			// // 	);


			// }//end: for loop friend
			
			// console.log(friends[i].name + ": " + friends[i].scores);
	  } //end: for loop for friends.length
	  


  });


	// $(".submit").on("click", function(event) {
	// 	event.preventDefault();

	// 	var scoresArr = [];
		
	// 	scoresArr.push($("#questionOne").val().trim());
	// 	scoresArr.push($("#questionTwo").val().trim()); 
	// 	scoresArr.push($("#questionThree").val().trim());

	// 	console.log(scoresArr);

	// 	newFriend = {
	//     	"name": $("#name").val().trim(),
	//     	"photo": $("#photo").val().trim(),
	//     	"scores": scoresArr
	//   	};

	//   // Question: What does this code do??
	//   $.post("/api/friends", newFriend)
	//   .done(function(data) {
	//     console.log(data);
	//     alert("Adding new friend");
	//   });
	// });
//loop through each objects answer array and find difference of each index position

//total difference of each friend

//choose lowest difference

//display result in modal pop-up (name and picture)




// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
  console.log("localhost:" + PORT);
});
