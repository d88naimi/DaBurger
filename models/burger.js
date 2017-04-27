//Import the ORM to create function that will INTERACT with the database
var orm = require("../config/orm.js");

var burger = {
	all: function(callback){
		orm.selectAll("burgers", function(res){
			callback(res);
		});
	},

	//variables cols and vals are arrays
	create: function(cols, vals, cb) {
		orm.insertOne("burgers", "burger_name", vals, function(res){
			callback(res);
		});
	},
	// udpdates burgers to display i think ?????
	update: function(objColVals, condition, callback) {
		orm.updateOne("burgers", objColVals, condition, function(res){
			callback(res);
		})
	}
};

// export the database functions for the controller (burger_controller.js)
module.exports = burger;