// import Mysql connection
var connection = require("../config/connection.js");

// Object for all our SQL statement function
function objSql(ob){
	var arr = [];

	for (var key in ob) {
		arr.push(key + "=" + ob[key]);
	}
	return arr.toString();
}

//selectall sql 
var orm = {
	selectAll: function(tableName, callback) {
		var queryString = "SELECT * FROM " +  tableName + ";";
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			callback(result);
		});
	},
// create sql 
insertOne: function(table, burgerName, devoured, callback) {
	var queryString = "INSERT INTO " + table + ' (burger_name, devoured) ';
	queryString += 'VALUES ("' + burgerName + '", ' + devoured + ');';

    console.log(queryString);

    connection.query(queryString, vals, function(err, result){
    	if (err) {
    		throw err;
    	}
    	callback(result);
    	});
	},
// update sql
updateOne: function(table, condition, callback) {
	var queryString = "UPDATE " + table + "SET devoured = true WHERE" + condition;

	console.log(queryString);
	connection.query(queryString, function(err,result){
		if(err) {
			throw err;
		}
		callback(result);
	});


	}	

};

module.exports = orm; 