var express = require("express");
var bodyParser = require("body-parser");
var router = express.Router();

var methodOverride = require("method-override");

// Import the model (burger.js) to use its database funcitons

var burger = require("../models/burger.js");

// create all routes and setup up logic within those routes require

router.get("/", function(req, res){
	burger.selectAll(function(data) {
		var hbsObject = {
			burger: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});
// insertOne sql 
router.post("/", function(req, res){
	burger.create([
		"burger_name", "devoured"
		],[
			req.body.burger_name, req.body.devoured
		], function(){
			res.redirect("/");
	});
});
//update
router.put("/:id", function(req, res){
	var condition = "id = " + req.params.id;
	console.log("conditions:", condition);

	burger.update({
		devoured: req.body.devoured
	}, condition, function(){
		res.redirect("/");
	});
});

module.exports = router;