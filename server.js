// my own test code

//Q1: I run orm.insertOne and the new burger is only displayed after second run of the function
//Q2: How to insert Boolean 0 or 1 (and not NULL) using orm.insetOne?
//Q3 queryString - vals and cols; how to insert 2 or more cols with one "cols"

// var orm = require("./config/orm.js");
var express = require("express");

var PORT = process.env.PORT || 8082;

var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");
app.use(routes);

app.listen(PORT, function() {
  console.log("Server working and listening on: http://localhost:" + PORT);
});


// orm.selectAll("burgers", "id");

// orm.insertOne("burgers", "burger_name", "devoured", "double_burger", 0, function (result) {
  
  // var data = result;
  // console.log(data);
  
// });

// orm.updateOne("burgers", "burgers.burger_name='burg1'", function(result){

// });