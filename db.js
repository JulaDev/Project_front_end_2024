let token = require("./token");
const mysql = require('mysql2');

let connection = mysql.createConnection(token);

connection.connect(()=>{
    console.log("SQL is connected.")
})

let createUserTable = `CREATE TABLE IF NOT EXISTS user(
    id varchar(30) primary key,
    password varchar(20) not null,
    name varchar(30) not null,
    seller boolean not null
    );`

let createItemTable = `CREATE TABLE IF NOT EXISTS product(
    product_id int auto_increment primary key,
    date varchar(30) not null,
    product_category varchar(20) not null,
    product_name varchar(20) not null,
    product_description varchar(600) not null,
    product_sales_count int,
    product_price decimal(15,2) not null
    );`

let createCategoryTable = `CREATE TABLE IF NOT EXISTS category(
    category_id int auto_increment primary key,
    category_name varchar(20) not null
    );`

connection.query(createItemTable, (err, row)=>{
    if(err) throw err;

    console.log('ITEM TABLE IS CREATED IF THERE WAS NO TABLE');
})
connection.query(createUserTable, (err, row)=>{
    if(err) throw err;

    console.log('USER TABLE IS CREATED IF THERE WAS NO TABLE');
})
connection.query(createCategoryTable, (err, row)=>{
    if(err) throw err;

    console.log('CATEGORY TABLE IS CREATED IF THERE WAS NO TABLE');
})



//==========================================================================================================================
// TABLE CREATION ABOVE
//==========================================================================================================================


connection.query('SELECT 1 + 1 AS solution',(error, results, fields)=>{
    if(error)throw error;
    console.log('The solution is: ', results[0].solution);
})





module.exports = connection;
