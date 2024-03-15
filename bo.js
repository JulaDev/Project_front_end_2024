const express = require('express');
const bodyParser = require('body-parser');
const db = require("./db");

const app = express();

app.use(bodyParser.urlencoded({extend:true}));
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
    res.render('./history.ejs');
})
app.get('/category',(req, res)=>{
    res.render('./category.ejs');
})
app.get('/seller',(req, res)=>{
    res.render('./seller.ejs');
})

app.get('/addItem',(req,res)=>{
    res.render('./addItem.ejs');
})

app.get('/addCategory',(req,res)=>{
    res.render('./addCategory.ejs')
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

app.post('/category', (req, res)=>{


        db.query(`SELECT * FROM categories`,(err, category)=>{
            if(err) throw err;

            res.render('category',{ categoryList: category });
        })


})

app.post("/getMarket",(req, res)=>{
    res.redirect('/market')
})

app.post('/addItem', (req, res)=>{
    let item = req.body.item;

    let sql = `INSERT INTO categories(name) VALUES('${category}');`


    db.query(sql,(err, categories)=>{
        if(err) throw err;

        console.log(`Added Category: ${category}`);

        for(let i = 0; i < categories.length; i++){
            console.log(`This is ${i+1} Item in Category Table: ${categories[i].name}`)
        }

    })

    db.query(`SELECT * FROM categories`, (err, row)=>{
        if(err) throw err;

        res.render('market',{ categoryList: row });
    })
})

app.post('/editItem', (req, res)=>{
    res.redirect('/home')
})

app.post('/removeItem', (req, res)=>{

    let rm = req.body.removeItem;

    db.query(`DELETE FROM item_list WHERE id = ${rm};`,(err, category)=>{
        if(err) throw err;

        console.log(`Selected Item ID: ${rm} REMOVED`)

    })

    db.query((`SELECT * FROM item_list`), (err, row)=>{
        if(err) throw err;

        db.query(`SELECT * FROM categories`,(err, categories)=>{
            if(err) throw err;

            res.render('market',{ data: row , categoryList: categories });
        })

    })

    console.log(`Selected ITEM: ${rm}`)
})

app.post('/addCategory', (req, res)=>{

    let category = req.body.categoryName;

    let sql = `INSERT INTO categories(name) VALUES('${category}');`


        db.query(sql,(err, categories)=>{
            if(err) throw err;

            console.log(`Added Category: ${category}`);

            for(let i = 0; i < categories.length; i++){
                console.log(`This is ${i+1} Item in Category Table: ${categories[i].name}`)
            }

        })

        db.query(`SELECT * FROM categories`, (err, row)=>{
            if(err) throw err;

            res.render('category',{ categoryList: row });
        })


})

app.post('/removeCategory', (req, res)=>{

    let rm = req.body.removeCategory;


    db.query(`DELETE FROM categories WHERE id = ${rm};`,(err, category)=>{
        if(err) throw err;

        console.log(`Selected Category ID: ${rm} REMOVED`)

    })

    db.query(`SELECT * FROM categories`, (err, cat)=>{
        if(err) throw err;

        res.render('category',{ categoryList: cat });
    })



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
