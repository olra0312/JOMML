const express = require("express");
const app = express();


app.get("/createuser", (req, res) => {

   return res.sendFile(__dirname + "/public/createuser/createuser.html");
})





const PORT = 3000;

const server = app.listen(PORT, (error) => {
    if (error) {
        console.log("Error starting the server");
    }
    console.log("This server is running on port", server.address().port);
});