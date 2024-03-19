//app.js
const express = require('express');
const session = require('express-session')
const bodyParser = require('body-parser');
const db = require("./db");
const {query} = require("express");


const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extend:true}));
app.use(express.static('public'));
app.use(express.static("views"));

const port = 3001;

let loginSTATUS = false;

app.set('view engine', 'ejs');

// GET UNDER =======================================

app.get('/centreLogin', (req, res)=>{
    res.render('./login.ejs');
})

app.get('/centreHome', (req, res)=>{
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

    res.render('history',{CPdate: date});
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

app.get('/editIem',(req,res)=>{
    res.render('./editItem.ejs')
})

app.get('/addCategory',(req,res)=>{
    res.render('./addCategory.ejs')
})

app.get('/editCategory',(req, res)=>{

    res.render('./editCategory.ejs' )
})


app.get('/historyDetail',(req,res)=>{
    res.render('./historyDetail.ejs')
})

// POST UNDER =======================================
// POST UNDER =======================================
// POST UNDER =======================================
// POST UNDER =======================================
// POST UNDER =======================================


app.post('/centreLogin', (req, res)=>{

    const username = req.body.username;
    const password = req.body.password;

    console.log(`INPUT ID: ${username}`);
    console.log(`INPUT PW: ${password}`);

    let loginSql = `SELECT * FROM user WHERE user_name  = '${username}'`

    db.query(loginSql, (err, row)=>{
        // if(err) throw err;

        console.log("SEARCHED ID: "+ row[0].user_name)

        if(row[0].user_password === password){
            loginSTATUS = true;
            console.log("LOGIN SUCCESS :: STAUTS-200")
            console.log("LOGIN STATUS: "+ loginSTATUS)

            res.redirect('/centreHome')

        }

        if(err){
            res.redirect('/centreLogin')
            console.log("Login Failure :: STATUS-500");
            alert("INCORRECT username or password.")
            throw err;
        }


    })

})


app.post('/home', (req, res)=>{

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
    let image = req.body.imageURL;
    let promotion = req.body.promotion;

    console.log(`'${date}', '${itemName}', '${category}', '${detail}', '${price}'`)

    let add = `INSERT INTO product(date, product_category, product_name, product_description, product_sales_count, product_price, product_image, product_price_promotion)
    VALUES ('${date}', '${category}', '${itemName}', '${detail}', 0 , '${price}', '${image}', '${promotion} ')`

    db.query(add, (err, row)=>{
        if(err) throw err;

        console.log("ITEM IS ADDED.")

    })

    res.redirect('/market')
})

app.post('/editItem', (req, res)=>{
    let sql = `SELECT * FROM category`
    const data = req.body.editItem;

    db.query(sql, (err, row)=>{
        if(err) throw err;
        let sqlFetch = `SELECT * FROM product WHERE product_id = ${data};`

        db.query(sqlFetch, (err, OD)=>{
            if(err) throw err;
            console.log('DATA QUEUE  FOR REPLACEMENT: '+ OD[0].product_name)
            res.render('./editItem.ejs', {category: row, readyData: OD});

        })
    })
})

app.post('/updateItem', (req, res)=>{
    let dataRow = req.body.selectedData;
    let itemName = req.body.itemName;
    let category = req.body.itemCategory;
    let detail = req.body.itemDetail;
    let price = req.body.itemPrice;
    let image = req.body.imageURL;
    let promotion = req.body.promotion;


    let sqlOldDB = `SELECT * FROM product WHERE product_id = ${dataRow};`

    db.query(sqlOldDB, (err, row)=>{

        let updateAll = `UPDATE product SET product_name = '${itemName}', product_category = '${category}', product_description = '${detail}', product_price = ${price}, product_image = '${image}', product_price_promotion = '${promotion}' WHERE product_id = '${dataRow}';`

        //input check
        console.log(`UPDATED NAME: ${itemName}`)
        console.log(`UPDATED CATEGORY: ${category}`)
        console.log(`UPDATED DESCRIPTION: ${detail}`)
        console.log(`UPDATED PRICE: ${price}`)
        console.log(`UPDATED IMAGE: ${image}`)
        console.log(`UPDATED PROMOTION: ${promotion}`)

        db.query(updateAll, (err,row)=>{
            if(err) throw err;

        })
    })

    res.redirect('market')

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

    let selected = req.body.select;
    let sql = `SELECT * FROM product WHERE product_category = '${selected}'`
    let selectAll = `SELECT * FROM product`

    console.log(`SELECTED CATEGORY: ${selected}`)

    if(selected === 'ALL'){
        db.query(selectAll, (err, row)=>{
            if(err) throw err;

            db.query(`SELECT * FROM category`,(err, categories)=>{
                if(err) throw err;
                res.render('market',{ data: row , categoryList: categories });
            })
        })
    } else{
        db.query(sql, (err, row)=>{
            if(err) throw err;

            db.query(`SELECT * FROM category`,(err, categories)=>{
                if(err) throw err;
                res.render('market',{ data: row , categoryList: categories });
            })
        })
    }
})

app.post('/history', (req, res)=>{
    const dateData = new Date();

    let date = `${dateData.getFullYear()}. ${dateData.getMonth()+1}. ${dateData.getDate()}`
    let sql = `SELECT * FROM history`

    db.query(sql,(err, row)=>{
        if(err) throw err;
        res.render('./history.ejs', {historyData: row})
    })
})

app.post('/historyDetail',(req, res)=>{

    let selected = req.body.selectedHistory;
    let selectSql = `SELECT * FROM history WHERE bill_id = ${selected}`


    db.query(selectSql, (err, row)=>{

        let selectProduct = `SELECT * FROM product WHERE product_id = ${row[0].bill_id}`

        db.query(selectProduct, (err, product)=>{
            if(err) throw err;

            console.log(`THIS is for CHECKING PRODUCT COUNT: ${product[0].product_sales_count}`)
            res.render('historyDetail', {selectedHistory: row, product: product})
        })

    })
})


app.listen(port, ()=>{
    console.log("BackEnd Server is listening to PORT: "+port);
})
