const express = require("express");
const app = express();


app.get("/createuser", (req, res) => {

   return res.sendFile(__dirname + "/public/createuser/createuser.html");
})

app.get("/login", (req, res) => {

    return res.sendFile(__dirname + "/public/login/login.html");
 })

 app.get("/help", (req, res) => {

    return res.sendFile(__dirname + "/public/helppage/helppage.html");
 })



const PORT = process.argv[2];

const server = app.listen(PORT, (error) => {
    if (error) {
        console.log("Error starting the server");
    }
    console.log("This server is running on port", server.address().port);
});
