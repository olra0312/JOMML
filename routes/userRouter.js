const router = require('express').Router();
//Defining file system as a standard library.
const fs = require("fs");


router.get("/createUser", (req, res) => {
   const body = fs.readFileSync("./public/createUser/createUser.html", "utf8");

   return res.send(body);
})

const User = require("../models/User.js");

router.post("/createUser",(req, res) => {
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
        return res.send( { response: `The user ${createdUser.username} was created`});
    }); 

    } catch {
        
    }
    console.log(req.body);
});

module.exports = router;