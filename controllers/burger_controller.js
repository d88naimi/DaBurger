var express = require("express");
var router = express.Router();

// var bodyParser = require("body-parser");
// var methodOverride = require("method-override");

// Import the model (burger.js) to use its database funcitons
var burger = require("../models/burger.js");

// create all routes and setup up logic within those routes require
router.get("/", function(req, res){
	burger.all(function(data) {
		var hbsObject = {
			burger: data
		};
		console.log(hbsObject);
		res.render("index");
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
// export routes for server.js to USE 
module.exports = router;