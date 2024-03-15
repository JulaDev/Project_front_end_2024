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

let createItemTable = `CREATE TABLE IF NOT EXISTS item_list(
    id int auto_increment primary key,
    date varchar(30) not null,
    category varchar(20) not null,
    name varchar(20) not null,
    detail varchar(600) not null,
    price decimal(15,2) not null
    );`

let createCategoryTable = `CREATE TABLE IF NOT EXISTS categories(
    id int auto_increment primary key,
    name varchar(20) not null
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

connection.query((`SELECT * FROM user`), (err, row)=>{

    if(err) throw err;

    for(let i =0 ; i < row.length; i++){
        console.log(`\nUSER DATA: ${i+1}`)
        console.log(`ID: ${row[i].id}`)
        console.log(`Name: ${row[i].name}`)
        console.log(`Email: ${row[i].email}`)
        console.log(`Mobile: ${row[i].phoneNumber}`)
        console.log(`PW: ${row[i].password}`)
    }

})


//register info insert
exports.insert = ( data, ret) =>{

    connection.query(`INSERT INTO user VALUES ('${data.id}', '${data.name}', '${data.email}', '${data.phoneNumber}','${data.password}');`, (err, rows)=> {
        if(err) throw err;
        ret(data.id)
    })

}

//login data check
exports.select = (id, psw, ret)=>{

    connection.query(`SELECT * FROM user WHERE id='${id}' limit 1`, (err, rows) => {
        if(err) throw err;
        ret( rows[0])
    })

}

//update user info
exports.update = ( data,  ret ) => {

    connection.query(`UPDATE user SET name='${data.name}', email='${data.email}', phoneNumber='${data.phoneNumber}', password='${data.password}' WHERE id='${data.id}';`, (err, rows) => {
        if ( err ) throw err;
        ret( rows );
    });
}



module.exports = connection;
