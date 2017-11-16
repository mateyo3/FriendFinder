app.get("/", function(req, res) {
  res.send("Welcome to FriendFinder!");
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "survey.html"));