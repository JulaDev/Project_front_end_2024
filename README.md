FRONTEND_SE-953262 Term Project
=
---
## UPDATE : 2024.03.15

### MEMBER (Please fill your name)
    642115501 Changseong Lee
    Member2
    Member3


`
## SQL CREATE TABLE

user TABLE

    create table user(
    id varchar(30) primary key,
    password varchar(20) not null,
    name varchar(30) not null,
    seller boolean not null
    );

category TABLE

    create table category(
    category_id int auto_increment primary key,
    category_name varchar(20) not null
    );`

product TABLE

    create table product(
    product_id int auto_increment primary key,
    date varchar(30) not null,
    product_category varchar(20) not null,
    product_name varchar(20) not null,
    product_description varchar(600) not null,
    product_sales_count int,
    product_price decimal(15,2) not null
    );`

other essential TABLE (please make a note above using the format under when new table is created.)

    create table newTable(
    ```
    
    add attributes.

    ```
    );

`
## SQL DUMMY INSERT INTO TABLE

user TABLE

    INSERT INTO user(id, password, name, seller)
    values('admin', 'admin0000', 'ADMIN', TRUE)
    ;

category TABLE

    INSERT INTO category(category_name) VALUES('${category}')

product TABLE

    `INSERT INTO product(date, product_category, product_name, product_description, product_sales_count, product_price)
    VALUES ('${date}', '${category}', '${itemName}', '${detail}', 0 , '${price}')`


## NPM 'IN USE'

Please install npm under to run.

    "axios"
    "body-parser"
    "ejs"
    "express"
    "express-session"
    "mysql2"
    "nodemon"

`

## OTHER 'IN USE'

 - Bootstrap v5.3.2


\
\
\
[Go To TOP](#TOP)
