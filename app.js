const express = require("express");
const app = express();






const PORT = process.argv[2];

const server = app.listen(PORT, (error) => {
    if (error) {
        console.log("Error starting the server");
    }
    console.log("This server is running on port", server.address().port);
});