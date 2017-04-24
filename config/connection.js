// Set up MySQL CONNECTION 
var mysql = require ("mysql");

var connection = mysql.createConnection({

  port: 3306,
  host: "localhost",
  user: "root",
  password: "",
  database: "burger_db"

});

// MAKE CONNECTION 
connection.connect(function)(err) {
  if (err) {
    console.error("errror connection: " + err.stack);
    return;
  }
  console.log(" connection id to: " + connection.threadId);
});

// EXPORT CONNECTION FOR OUR ORM TO USE

module.export = connection;