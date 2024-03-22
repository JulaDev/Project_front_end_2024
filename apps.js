//apps.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const db = require("./db.js");

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

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // if (email === 'example@example.com' && password === 'password') {
    //     res.redirect('/homepage');
    // } else {
    //     res.render('login', { error: 'Invalid email or password' });
    // }

    res.redirect('/homepage');
});

app.get('/register', (req, res) => {
    res.render('register'); // Render the register.ejs file
});

app.get('/homepage', (req, res) => {
    res.render('homepage'); // Render the homepage.ejs file
});

app.get('/contact', (req, res) => {
    res.render('contact'); // Render the homepage.ejs file
});

app.get('/list', async function(req, res) {
    const page = req.query.page ? parseInt(req.query.page) : 1;
    const pageSize = 15; // Number of items per page
    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;

    console.log(`Page: ${page}, Start Index: ${startIndex}, End Index: ${endIndex}`);

    try {
        const product = await itemlist.getProductItems(startIndex, endIndex);
        const totalItems = await itemlist.getTotalProductItemsCount();
        const totalPages = Math.ceil(totalItems / pageSize);

        res.render('list', { 
            listTitle: "Product", 
            items: product,
            totalPages,
            currentPage: page
        });
    } catch (error) {
        console.error("Error getting product items:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.get('/snack', async function(req, res) {
    try {
        const snackItems = await itemlist.findByColumn('product_category', 'Snack & Dessert');
        res.render('listByCategory', { listTitle: "Snack & Dessert", items: snackItems });
    } catch(error) {
        console.error("Error fetching snack items:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.get('/meat', async function(req, res) {
    try {
        const meatItems = await itemlist.findByColumn('product_category', 'Meat & Seafood');
        res.render('listByCategory', { listTitle: "Meat & Seafood", items: meatItems });
    } catch(error) {
        console.error("Error fetching meat items:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.get('/fruit', async function(req, res) {
    try {
        const fruitItems = await itemlist.findByColumn('product_category', 'Fruit & Vegetable');
        res.render('listByCategory', { listTitle: "Fruit & Vegetable", items: fruitItems });
    } catch(error) {
        console.error("Error fetching fruit items:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.get('/promotion', async function(req, res) {
    try {
        const promotion = await itemlist.executeQuery('SELECT * FROM product WHERE product_price_promotion IS NOT NULL');
        res.render('listByCategory', { listTitle: "Promotion", items: promotion });
    } catch(error) {
        console.error("Error fetching fruit items:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.get('/product/:productId', async (req, res) => {
    try {
        const productId = req.params.productId;
        const product = await itemlist.findProductById(productId);
        res.render('productpage', { product });
    } catch(error) {
        console.error("Error fetching product details:", error);
        res.status(500).send("Internal Server Error");
    }
});

// Define a global variable to store cart items
let cartItems = [];

// Route to add an item to the cart
app.post('/addToCart', (req, res) => {
    const { productId, productName, productPrice } = req.body;
    // Add the item to the cart
    cartItems.push({ id: productId, name: productName, price: productPrice });
    res.redirect('/cart');
});

// Route to display the cart page
app.get('/cart', (req, res) => {
    res.render('cart', { cartItems });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});