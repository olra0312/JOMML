//Setting up the express library from NPM to create a server.
const express = require("express");
const app = express();
const mysql = require('mysql');
const session = require('express-session');
const bodyParser = require('body-parser');

//Passing jSON-objects and form data in HTML-files.
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(session({
	secret: 'secret',
	resave: false,
	saveUninitialized: true
}));
//User router reference.
const userRouter = require('./routes/userRouter.js');
app.use(userRouter);

//Getting access to static files such as CSS, images, videos etc.
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/home'));

//Defining objection model and knex library.
const { Model } = require("objection")
const Knex = require("knex")
const knexfile = require("./knexfile.js")

//Creating connection to database.
const knex = Knex(knexfile.development)
Model.knex(knex)


app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());


const PORT = process.argv[2];

const server = app.listen(PORT, (error) => {
    if (error) {
        console.log("Error starting the server");
    }
    console.log("This server is running on port", server.address().port);
});