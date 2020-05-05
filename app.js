const express = require("express");
const app = express();






const port = process.env.PORT ? process.env.PORT : 3000;

const server = app.listen(port, (error) => {
    if (error) {
        console.log("Error starting the server");
    }
    console.log("This server is running on port", server.address().port);
});