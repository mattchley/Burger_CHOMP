// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "hngomrlb3vfq3jcr.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "i8mlgfl7rq638t6f",
  password: "frwj6wy4e9rcmvqs",
  database: "iv9v1pz19zmiav10"
});




// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
