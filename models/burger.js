//Import the ORM to create function that will interact with the database
var orm = require("../config/orm.js");

var burger = {
	all: function(callback){
		orm.selectAll("burgers", function(res){
			callback(res);
		});
	},

	//variables cols and vals are arrays
	create: function(vals, cb) {
		orm.insertOne("burgers", "burgers_name", vals, function(res){
			callback(res);
		});
	},
	// udpdates burgers to display i think ?????
	update: function(condition, callback) {
		orm.updateOne("burgers", condition, function(res){
			callback(res);
		})
	}
};

// export the database functions for the controller (burger_controller.js)
module.exports = burger;