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

    create table categories(
    id int auto_increment primary key,
    name varchar(20) not null
    );

item_list TABLE

    create table item_list(
    id int auto_increment primary key,
    date varchar(30) not null,
    category varchar(20) not null,
    name varchar(20) not null,
    detail varchar(600) not null,
    price decimal(15,2) not null
    );

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

    INSERT INTO category(name)
    values('desert')
    ;

item_list TABLE

    INSERT INTO item_list(category, date, name, detail, price)
    values('desert', 'Choco', 'This is very sweet.', 4.25)
    ;


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
