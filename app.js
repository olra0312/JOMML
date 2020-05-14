const express = require("express");
const app = express();


app.get("/createUser", (req, res) => {

   return res.sendFile(__dirname + "/public/createUser/createUser.html");
})

app.get("/updateUser", (req, res) => {

    return res.sendFile(__dirname + "/public/createUser/updateUser.html");
 }) 


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