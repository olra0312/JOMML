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



app.get("/createuser", (req, res) => {
    const body = fs.readFileSync("./public/createuser/createuser.html", "utf8")

   return res.send(body)
})

app.post("/createuser",(req, res) => {
    console.log(req.body)

})





const PORT = process.argv[2];

const server = app.listen(PORT, (error) => {
    if (error) {
        console.log("Error starting the server");
    }
    console.log("This server is running on port", server.address().port);
});