const mysql = require("mysql2");

// Database configuration
const config = {
    host: "localhost",
    user: "root",
    password: "373600",
    database: "groceries_shop"
};

// Create a connection pool
const pool = mysql.createPool(config);

// Export the pool object
module.exports = pool.promise(); // Exporting the promise-based pool for async/await syntax
