const express = require('express');
const bodyParser = require('body-parser');
const db = require("./db");
const {query} = require("express");

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
    db.query((`SELECT * FROM product`), (err, row)=>{
        if(err) throw err;

        db.query(`SELECT * FROM category`,(err, categories)=>{
            if(err) throw err;

            res.render('market',{ data: row , categoryList: categories });

        })
    })
})
app.get('/history',(req, res)=>{
    res.render('./history.ejs');
})
app.get('/category',(req, res)=>{
    db.query(`SELECT * FROM category`, (err, row)=>{
        if(err) throw err;

        res.render('category',{ categoryList: row });
    })
})
app.get('/seller',(req, res)=>{
    res.render('./seller.ejs');
})

app.get('/addItem',(req,res)=>{

    let sql = `SELECT * FROM category`

    db.query(sql, (err, row)=>{
        if(err) throw err;

        res.render('./addItem.ejs', {category: row});
    })


})

app.get('/addCategory',(req,res)=>{
    res.render('./addCategory.ejs')
})

app.get('/editCategory',(req, res)=>{

    res.render('./editCategory.ejs' )
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

    db.query((`SELECT * FROM product`), (err, row)=>{
        if(err) throw err;

        db.query(`SELECT * FROM category`,(err, categories)=>{
            if(err) throw err;

            res.render('market',{ data: row , categoryList: categories });
        })

    })

})

app.post('/category', (req, res)=>{


        db.query(`SELECT * FROM category`,(err, category)=>{
            if(err) throw err;

            res.render('category',{ categoryList: category });
        })


})


app.post('/addItem', (req, res)=>{
    const dateData = new Date();

    let date = `${dateData.getFullYear()}. ${dateData.getMonth()+1}. ${dateData.getDate()}`

    let itemName = req.body.itemName;
    let category = req.body.itemCategory;
    let detail = req.body.itemDetail;
    let price = req.body.itemPrice;

    console.log(`'${date}', '${itemName}', '${category}', '${detail}', '${price}'`)

    let add = `INSERT INTO product(date, product_category, product_name, product_description, product_sales_count, product_price)
    VALUES ('${date}', '${category}', '${itemName}', '${detail}', 0 , '${price}')`

    db.query(add, (err, row)=>{
        if(err) throw err;

        console.log("ITEM IS ADDED.")

    })

    res.redirect('/market')



})

app.post('/editItem', (req, res)=>{
    res.redirect('/home')
})

app.post('/removeItem', (req, res)=>{

    let rm = req.body.removeItem;

    db.query(`DELETE FROM product WHERE product_id = ${rm};`,(err, category)=>{
        if(err) throw err;

        console.log(`Selected Item ID: ${rm} REMOVED`)

    })

    res.redirect('/market')

    console.log(`Selected ITEM: ${rm}`)
})

app.post('/addCategory', (req, res)=>{

    let category = req.body.categoryName;

    let sql = `INSERT INTO category(category_name) VALUES('${category}');`


        db.query(sql,(err, categories)=>{
            if(err) throw err;

            console.log(`Added Category: ${category}`);

            for(let i = 0; i < categories.length; i++){
                console.log(`This is ${i+1} Item in Category Table: ${categories[i].category_name}`)
            }

        })

        res.redirect('/category')


})

app.post('/editCategory',(req, res)=>{

    let readyData = req.body.categoryEdit;

    console.log(`SELECTED DATA TO UPDATE: ${readyData}`)

    res.render('./editCategory.ejs', {data: readyData})
})



app.post('/updateCategory',(req, res)=>{

    const oldData = req.body.oldName;
    const newData = req.body.categoryName;

    console.log('Old DATA: '+oldData);

    const sql = `UPDATE category SET category_name = '${newData}' WHERE category_name = '${oldData}'`

    db.query(sql, (err, data)=>{
        if(err) throw err;

        console.log("Data has been updated!")

    })

    res.redirect('/category')

})


app.post('/removeCategory', (req, res)=>{

    let rm = req.body.removeCategory;


    db.query(`DELETE FROM category WHERE category_id = ${rm};`,(err, category)=>{
        if(err) throw err;

        console.log(`Selected Category ID: ${rm} REMOVED`)

    })

    res.redirect('/category')



})





app.post('/arrange', (req,res)=>{


    db.query((`SELECT * FROM product`), (err, row)=>{
        if(err) throw err;

        db.query(`SELECT * FROM category`,(err, categories)=>{
            if(err) throw err;

            res.render('market',{ data: row , categoryList: categories });
        })

    })
})




app.listen(port, ()=>{
    console.log("BackEnd Server is listening to PORT: "+port);
})
