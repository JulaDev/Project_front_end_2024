const express = require('express');
const bodyParser = require('body-parser');
const db = require("./db");

const app = express();

app.use(bodyParser.urlencoded({extend:false}));
app.use(express.static('public'));
app.use(express.static("views"));

const port = 3001;

app.set('view engine', 'ejs');

// GET UNDER =======================================

app.get('/', (req, res)=>{
    res.render('./login.ejs');
})

app.get('/home', (req, res)=>{
    res.render('./home.ejs');

})

app.get('/market',(req, res)=>{
    res.render('./market.ejs');
})
app.get('/history',(req, res)=>{
    //get category DB
    //get item list DB
    res.render('./history.ejs');
})
app.get('/category',(req, res)=>{
    //get category DB
    //get item list DB
    res.render('./category.ejs');
})
app.get('/seller',(req, res)=>{
    //get category DB
    //get item list DB
    res.render('./seller.ejs');
})

app.get('/addItem',(req,res)=>{
    res.render('./addItem.ejs');
})

app.get('/addCategory',(req,res)=>{
    res.render('./addCategory.ejs')
})

app.post("/toMarket", (req, res)=>{


})
app.post("/toHistory", (req, res)=>{
    res.redirect('/history');
})
app.post("/toCategory", (req, res)=>{
    res.redirect('/category');
})
app.post("/toSeller", (req, res)=>{
    res.redirect('/seller');
})


// POST UNDER =======================================

db.query((`SELECT id FROM user`), (err, user)=>{
    if(err) throw err;

    // make login algorithm

})






app.post('/', (req, res)=>{

    res.redirect('/home')

})


app.post('/home', (req, res)=>{

})
app.post('/history', (req, res)=>{
})

app.post('/market', (req, res)=>{

    db.query((`SELECT * FROM item_list`), (err, row)=>{
        if(err) throw err;

        db.query(`SELECT * FROM categories`,(err, categories)=>{
            if(err) throw err;

            res.render('market',{ data: row , categoryList: categories });
        })

    })

})

app.post("/getMarket",(req, res)=>{
    res.redirect('/market')
})

app.post('/addItem', (req, res)=>{
    res.redirect('/home')
})

app.post('/editItem', (req, res)=>{
    res.redirect('/home')
})

app.post('/removeItem', (req, res)=>{
    res.redirect('/market')
})

app.post('/addCategory', (req, res)=>{
    res.redirect('/market')
})

app.post('/arrange', (req,res)=>{

    db.query((`SELECT * FROM item_list`), (err, row)=>{
        if(err) throw err;

        db.query(`SELECT * FROM categories`,(err, categories)=>{
            if(err) throw err;

            res.render('market',{ data: row , categoryList: categories });
        })

    })
})





app.listen(port, ()=>{
    console.log("BackEnd Server is listening to PORT: "+port);
})
