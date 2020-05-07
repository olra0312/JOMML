const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(express.static(__dirname + '/public'))


const { Model } = require("objection")
const Knex = require("knex")
const knexfile = require("./knexfile.js")

const knex = Knex(knexfile.development)

Model.knex(knex)

const fs = require("fs")



app.get("/createUser", (req, res) => {
    const body = fs.readFileSync("./public/createUser/createUser.html", "utf8")

   return res.send(body)
})

const User = require("./models/User.js");

app.post("/createUser",(req, res) => {
    try {
    User.query().insert({ 
        first_name: req.body.firstName, 
        last_name: req.body.lastName,
        email: req.body.email,
        phone_number: req.body.phoneNumber,
        address: req.body.address,
        zip_code: req.body.zipCode,
        city: req.body.city,
        username: req.body.username,
        password: req.body.password
    }).then(createdUser => { 
        return res.send( { response: `The user ${createdUser.username} was created`})
    }); 

    } catch {
        
    }

    console.log(req.body)

})





const PORT = process.argv[2];

const server = app.listen(PORT, (error) => {
    if (error) {
        console.log("Error starting the server");
    }
    console.log("This server is running on port", server.address().port);
});