const mysql = require("mysql2");

// Create Database Connection
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "6NFrpFM9H",
    database: "employee_db"
});

// open the connection
connection.connect(error => {
    if (error) throw error;
});

module.exports = connection;