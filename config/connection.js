// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "ocvwlym0zv3tcn68.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "u3rpmlm1pi0ra9rc",
  password: "haa11hk8518atqaw",
  database: "puxp2pdph3crhpp0"
});
};



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
