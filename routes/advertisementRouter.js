const router = require('express').Router();
//Defining file system as a standard library.
const fs = require("fs");


router.get("/createAdvertisement", (req, res) => {
   const body = fs.readFileSync("./public/createAdvertisement/createAdvertisement.html", "utf8");

   return res.send(body);
})

const User = require("../models/Advertisement.js");

router.post("/createAdvertisement",(req, res) => {
    try {
        
    User.query().insert({ 
        book_name: req.body.bookName, 
        author: req.body.author,
        publisher: req.body.publisher,
        isbn: req.body.isbn,
        edition: req.body.edition,
        price: req.body.price,
        condition: req.body.condition,
    }).then(createdAdvertisement => { 
        return res.send( { response: `The advertisement ${createdAdvertisement.bookName} was created`});
    }); 

    } catch {
        
    }
    console.log(req.body);
});

module.exports = router;