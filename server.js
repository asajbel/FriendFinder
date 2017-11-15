// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var htmlRoutes = require("./app/routing/htmlRoutes");
var apiRoutes = require("./app/routing/apiRoutes");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});