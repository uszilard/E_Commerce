// Set up MySQL connection.
var mysql = require("mysql");
var dotenv = require("dotenv");

dotenv.config();

var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: 3306,
  user: "root",
  password: "Sofiia20?!",
  database: "ecommerce_db"
});

// Make connection
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;