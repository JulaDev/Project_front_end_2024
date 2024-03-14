FRONTEND_SE-953262 Term Project
=
---
## UPDATE : 2024.03.15

### MEMBER (Please fill your name)
    642115501 Changseong Lee
    Member2
    Member3


`
## SQL

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

 - Bootstrap v3.4.1


\
\
\
[Go To TOP](#TOP)