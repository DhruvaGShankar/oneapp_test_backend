const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "appuser",
  password: "1234",
  database: "oneapp"
});

db.connect((err) => {
  if (err) {
    console.log("DB connection failed:", err);
  } else {
    console.log("Connected to MySQL");
  }
});

module.exports = db;