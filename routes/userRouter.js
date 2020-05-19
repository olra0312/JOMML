const router = require('express').Router();
//Defining file system as a standard library.
const fs = require("fs");


router.get("/createUser", (req, res) => {
   const nav = fs.readFileSync("./public/navbar/navbar.html", "utf8"); 
   const body = fs.readFileSync("./public/createUser/createUser.html", "utf8");
   const foot = fs.readFileSync("./public/footer/footer.html", "utf8")

   return res.send(nav + body + foot);
})

const User = require("../models/User.js");

//Validation
router.post("/createUser",(req, res) => {
    const { password, 
            confirmPassword,
            firstName,
            lastName,
            email,
            phoneNumber,
            address,
            zipCode,
            city,
            username } = req.body;

   
    try{
        //Password validation
        if (password && confirmPassword && firstName && lastName && email && phoneNumber && address && zipCode && city && username) {
            
            const CapLetterRegex = /[A-Z]+/g
            const NumbersRegex = /[0-9]/g
            const EmailRegex = /[@]+/g
            const PhoneRegex = /\d{8}/g
            const ZipRegex = /\d{4}/g
            const wordRegex = /\w+/g

            if (password && confirmPassword) {

                if (password.length < 8) {
                    return res.status(400).send({ response: "Password must be 8 characters or longer"});
                } 
                    
                if (password !== confirmPassword) {
                    return res.status(400).send({ response: "Password and confirm password needs to be the same"});
                } 
                    
                if (CapLetterRegex.test(password) == false){
                    return res.status(400).send({ response: "Password should contain minimum one capital letter"});
                }

                if (NumbersRegex.test(password) == false) {
                    return res.status(400).send({ response: "Password should contain minimum one digit"});
                }
                
            if (email) {
                if (!email.match(EmailRegex)) {
                    return res.status(400).send({ response: "Email skal indeholde @"});
                } 
            }

            if (phoneNumber){
                if(!phoneNumber.match(PhoneRegex)){
                    return res.status(400).send({ response: "Phonenumber should contain 8 digits"});
                }

                if (phoneNumber.length > 8) {
                    return res.status(400).send({ response: "Phonenumber must be 8 digits long"});
                }
            }

            if (zipCode) {
                if (!zipCode.match(ZipRegex)){
                    return res.status(400).send({ response: "Zipcode should contain 4 digits"});
                }

                if (zipCode.length > 4) {
                    return res.status(400).send({ response: "Zipcode must be 4 digits long"});
                } 
            }

            if(firstName && lastName && address && city && username) {
                if(!firstName.match(wordRegex)) {
                    return res.status(400).send({ response: "Cannot be null"});
                }

                if(!lastName.match(wordRegex)) {
                    return res.status(400).send({ response: "Cannot be null"});
                }

                if(!address.match(wordRegex)) {
                    return res.status(400).send({ response: "Cannot be null"});
                }

                if(!city.match(wordRegex)) {
                    return res.status(400).send({ response: "Cannot be null"});
                }

                if(!username.match(wordRegex)) {
                    return res.status(400).send({ response: "Cannot be null"});
                }
            }

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
            })
  
        } 
        } 
        } catch {
                
    }
    
    console.log(req.body);
});

module.exports = router;
