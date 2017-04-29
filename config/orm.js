// import Mysql connection
var connection = require("../config/connection.js");

// Object for all our SQL statement function CRUD PAGE CREATE READ UPDATE DELETE
// `??` SANITIZING DATA "?""
// function objToSql(ob){
// 	var arr = [];

// 	for (var key in ob) {
// 		arr.push(key + "=" + ob[key]);
// 	}
// 	return arr.toString();
// }

// selectall sql 


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
insertOne: function(table, cols, vals, callback) {

    var queryString = "INSERT INTO " + table +" ("+cols.toString()+") VALUES (?)";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      callback(result);
    });
  },
// update sql
updateOne: function(table, condition, callback) {
	var queryString = "UPDATE " + table + " SET devoured = true WHERE "  + condition;

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