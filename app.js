//Setting up the express library from NPM to create a server.
const express = require("express");
const app = express();

//Passing jSON-objects and form data in HTML-files.
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//User router reference.
const userRouter = require('./routes/userRouter.js');
app.use(userRouter);

//Advertisement router reference.
const advertisementRouter = require('./routes/advertisementRouter.js');
app.use(advertisementRouter);


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



app.get("/login", (req, res) => {

    return res.sendFile(__dirname + "/public/login/login.html");
 })





const PORT = process.argv[2];

const server = app.listen(PORT, (error) => {
    if (error) {
        console.log("Error starting the server");
    }
    console.log("This server is running on port", server.address().port);
});