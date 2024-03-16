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

const itemlist = require('./model/itemlist');
(async () => {
    await itemlist.defineProductItems();
  })();

app.get('/', function(req, res) {
    res.render('login');
});

app.get('/list', async function(req, res) {
    const productNames = await itemlist.getProductItems();
    res.render('list', { listTitle: "product", items: productNames });
});

app.get('/list/snack', async function(req, res) {
    try {
        const snackItems = await itemlist.findByColumn('category', 'Snack');
        res.render('listByCategory', { listTitle: "Snack", items: snackItems });
    } catch(error) {
        console.error("Error fetching snack items:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.get('/list/dessert', async function(req, res) {
    try {
        const dessertItems = await itemlist.findByColumn('category', 'Dessert');
        res.render('listByCategory', { listTitle: "Dessert", items: dessertItems });
    } catch(error) {
        console.error("Error fetching dessert items:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.get('/list/meat', async function(req, res) {
    try {
        const meatItems = await itemlist.findByColumn('category', 'Meat');
        res.render('listByCategory', { listTitle: "Meat", items: meatItems });
    } catch(error) {
        console.error("Error fetching meat items:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.get('/list/seafood', async function(req, res) {
    try {
        const seafoodItems = await itemlist.findByColumn('category', 'Seafood');
        res.render('listByCategory', { listTitle: "Seafood", items: seafoodItems });
    } catch(error) {
        console.error("Error fetching seafood items:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.get('/list/fruit', async function(req, res) {
    try {
        const fruitItems = await itemlist.findByColumn('category', 'Fruit');
        res.render('listByCategory', { listTitle: "Fruit", items: fruitItems });
    } catch(error) {
        console.error("Error fetching fruit items:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.get('/list/vegetable', async function(req, res) {
    try {
        const vegetableItems = await itemlist.findByColumn('category', 'Vegetable');
        res.render('listByCategory', { listTitle: "Vegetable", items: vegetableItems });
    } catch(error) {
        console.error("Error fetching vegetable items:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});