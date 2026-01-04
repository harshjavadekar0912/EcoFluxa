const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "resource_tracker"
});

db.connect();
module.exports = db;
