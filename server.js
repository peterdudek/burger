// my own test code

//Q1: I run orm.insertOne and the new burger is only displayed after second run of the function
//Q2: How to insert Boolean 0 or 1 (and not NULL) using orm.insetOne?

var orm = require("./config/orm.js");
var express = require("express");

orm.selectAll("burgers", "id");

orm.insertOne("burgers", "burger_name", "devoured", "testing_burger", 0, function (result) {
  
  // var data = result;
  // console.log(data);
  
});