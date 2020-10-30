// my own test code

var orm = require("./config/orm.js");
var express = require("express");

orm.selectAll("burgers", "id");

orm.insertOne("burgers", "burger_name", "gooogle_burgerrrrrrrrrrrrrr", function (result) {
  
  var data = result;

  console.log(data);
  
});