const router = require('express').Router();
const User = require('../models/User.js');
const Advertisement = require('../models/Advertisement.js');
//Defining file system as a standard library.
const fs = require("fs");


router.get("/createAdvertisement", (req, res) => {
    if(req.session.login){
        const head = fs.readFileSync("./public/navbar/navbar.html", "utf8");
        const body = fs.readFileSync("./public/advertisement/createAdvertisement.html", "utf8");
        const foot = fs.readFileSync("./public/footer/footer.html");

        return res.send(head + body + foot);
    }
    else{
    return res.redirect("/login");
    }
});

//Router for displaying the list of advertisements added to a certain user
router.get("/myAdvertisements", async (req, res) => {
    if(req.session.login) {
        username = req.session.username;
        const usersWithAdvertisements = await User.query().select('username').where('username', username).withGraphFetched('advertisements');
        const advertisements = usersWithAdvertisements[0];
        const stringAdvertisements = JSON.stringify(advertisements);
        console.log("Advertisements as strings", stringAdvertisements);
        return res.send({ response: stringAdvertisements});
    } else {
     return res.redirect("/login");
    }
});

router.post("/createAdvertisement",(req, res) => {
    try {
        
    Advertisement.query().insert({ 
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