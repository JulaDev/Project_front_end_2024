//app.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const db = require("./config/db.js");

const { snackItems, dessertItems, meatItems, seafoodItems, fruitItems, vegetableItems } = require("./model/listItem");

const app = express();
app.set("view engine", "ejs");

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the login page at the root route
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'html', 'login.html'));
});

// Serve the registration page at the '/register' route
app.get('/register', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'html', 'register.html'));
});

// Handle the POST request for login
app.post('/login', function(req, res) {
    // Here you should implement your login logic
    // This is just a placeholder logic, replace it with actual authentication
    const { email, password } = req.body;
    // If login is successful, redirect to the homepage
    res.redirect('/homepage');
});

// Handle the POST request for registration
app.post('/register', function(req, res) {
    // Here you should implement your registration logic
    // This is just a placeholder logic, replace it with actual registration code
    const { name, surname, email, password, confirm_password, role } = req.body;
    // Assuming registration is successful, redirect to the login page
    res.redirect('/');
});

// Serve the homepage
app.get('/homepage', function(req, res) {
    // Replace 'homepage.html' with the actual file you want to serve
    res.sendFile(path.join(__dirname, 'public', 'html', 'homepage.html'));
});


(async () => {
  await snackItems.defineProductItems();
  await dessertItems.defineProductItems();
  await meatItems.defineProductItems();
  await seafoodItems.defineProductItems();
  await fruitItems.defineProductItems();
  await vegetableItems.defineProductItems();
})();

app.get('/list/snacks', async function(req, res) {
    const snackNames = await snackItems.getProductItemsName();
    res.render('list', { listTitle: "snack", items: snackNames });
});

// Handle the '/list' route for meats
app.get('/list/meats', async function(req, res) {
    const meatNames = await meatItems.getProductItemsName();
    res.render('list', { listTitle: "meat", items: meatNames });
});

// Start the server on port 3000
app.listen(3000, function() {
    console.log('Server running on port 3000');
});
