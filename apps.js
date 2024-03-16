//apps.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const db = require("./config/db.js");

const app = express();
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'public', 'view'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

const itemlist = require('./itemlist');


app.get('/', function(req, res) {
    res.render('login');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});