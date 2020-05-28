const router = require('express').Router();
const User = require('../models/User.js');
const Advertisement = require('../models/Advertisement.js');
//Defining file system as a standard library.
const fs = require("fs");


router.get("/createAdvertisement", (req, res) => {
    if(req.session.login){
        const head = fs.readFileSync("./public/navbar/navbar.html", "utf8");
        const body = fs.readFileSync("./public/advertisement/createAdvertisement.html", "utf8");
        const foot = fs.readFileSync("./public/footer/footer.html", "utf8");

        return res.send(head + body + foot);
    }
    else{
    return res.redirect("/login");
    }
});

//Router for displaying the list of advertisements added to a certain user
router.get("/myAdvertisementsData", async (req, res) => {
    if(req.session.login) {
        userId = req.session.userId;
        const advertisements = await Advertisement.query().
            select(
                'user_id',
                'book_name', 
                'author', 
                'publisher', 
                'isbn', 
                'edition', 
                'price', 
                'condition')
                .where('user_id', userId);
                const stringAdvertisements = JSON.stringify(advertisements);

        console.log("Advertisements", advertisements);
        return res.send({ response: { 
                advertisements: stringAdvertisements
            }});    
    } else {
     return res.redirect("/login");
    }
});


router.get("/advertisements", (req, res) => { //Requires login to access
    if(req.session.login) {
        const head = fs.readFileSync("./public/navbar/navbar.html", "utf8");
        const page = fs.readFileSync("./public/advertisement/showAdvertisements.html", "utf8");
        const foot = fs.readFileSync("./public/footer/footer.html", "utf8");
        return res.send(head + page + foot);
    } else {
        return res.redirect("/login");
    }
});

router.post("/createAdvertisement",(req, res) => {
    if(req.session.login){
        try {
            Advertisement.query().select().insert({ 
                book_name: req.body.bookName, 
                user_id: req.session.userId,
                author: req.body.author,
                publisher: req.body.publisher,
                isbn: req.body.isbn,
                edition: req.body.edition,
                price: req.body.price,
                condition: req.body.condition,
            }).then(createdAdvertisement => { 
                return res.redirect("/createAdvertisement")
        }); 
        } catch (error) {
            res.send(error);
        } 
    } else {
        return res.redirect("/login");
    }
        console.log(req.body);
});

module.exports = router;