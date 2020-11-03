// Dependencies
var express = require("express");

var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function (req, res) {
  burger.selectAll(function(result) {
    var hbsObject = {
      burgers: result
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  })
})

router.post("/api/burgers", function (req, res) {
  burger.insertOne( "burger_name", "devoured", req.body.burger_name, req.body.devoured, function(result){
    res.json(result)
  })
})

router.put("/api/burgers/:id", function (req, res) {
  console.log(req.params.id)
  burger.updateOne(req.params.id, req.body.devoured, function(result){
    res.json(result)
  })
})

module.exports = router;