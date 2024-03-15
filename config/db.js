//db.js
const mysql = require("mysql2");

let config =  { host: "localhost",
    user: "root",
    password: "373600",
    database: "groceries_shop"
};


const dbConnection = mysql.createConnection(config);

// Connect to the database
dbConnection.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Database is connected');
});

// Export the database connection
module.exports = dbConnection;
