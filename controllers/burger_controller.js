var express = require("express");
var router = express.Router();

// var bodyParser = require("body-parser");
// var methodOverride = require("method-override");

// Import the model (burger.js) to use its database funcitons
var burger = require("../models/burger.js");

// create all routes and setup up logic within those routes require
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
// insertOne sql 
router.post("/", function(req, res) {
  burger.create(req.body.name, function() {
    res.redirect("/");
  });
});
//update
router.put("/:id", function(req, res) {
  var burgerID = "id = " + req.params.id;

  console.log("condition Burger ID: ", burgerID);

  burger.update( burgerID, function() {
    
    res.redirect("/");

  });
});
// export routes for server.js to USE 
module.exports = router;