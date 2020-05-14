//Setting up the express library from NPM to create a server.
const express = require("express");
const app = express();
const mysql = require('mysql');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

//Passing jSON-objects and form data in HTML-files.
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//User router reference.
const userRouter = require('./routes/userRouter.js');
app.use(userRouter);

//Getting access to static files such as CSS, images, videos etc.
app.use(express.static(__dirname + '/public'))

//Defining objection model and knex library.
const { Model } = require("objection")
const Knex = require("knex")
const knexfile = require("./knexfile.js")

//Creating connection to database.
const knex = Knex(knexfile.development)
Model.knex(knex)

//Defining file system as a standard library.
const fs = require("fs")

app.get("/createUser", (req, res) => {

   return res.sendFile(__dirname + "/public/createUser/createUser.html");
})

app.get("/updateUser", (req, res) => {

    return res.sendFile(__dirname + "/public/createUser/updateUser.html");
 }) 


app.get("/login", (req, res) => {
    return res.sendFile(__dirname + "/public/login/login.html");
 })

 app.get("/home", (req, res) => {
    return res.sendFile(__dirname + "/public/home/home.html");
});

//POST requests



//LOGIN
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'password',
	database : 'jomml_db'
});

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

//Checks if the user input is the same as in the database//
app.post('/home', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;
	if (username && password) {
		connection.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('/home');
			} else {
				response.send('Forkert brugernavn eller password!');
			}			
			response.end();
		});
	} else {
		response.send('Venligst indtast brugernavn og kodeord.');
		response.end();
	}
});


const PORT = process.argv[2];

const server = app.listen(PORT, (error) => {
    if (error) {
        console.log("Error starting the server");
    }
    console.log("This server is running on port", server.address().port);
});