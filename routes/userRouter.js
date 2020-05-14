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
                
            if (password && confirmPassword) {
                    
                const CapLetterRegex = /[A-Z]+/g
                const NumbersRegex = /[0-9]/g
                const EmailRegex = /[@]+/g
                const PhoneRegex = /\d{8}/g
                const ZipRegex = /\d{4}/g

                if (password.length < 8) {
                    //console.log("Password must be 8 characters or longer");
                    return res.status(400).send({ response: "Password must be 8 characters or longer"});
                } 
                    
                if (password !== confirmPassword) {
                    //console.log("Password and confirm password needs to be the same");
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
                    console.log("Email skal indeholde @ ");
                    return res.status(400).send({ response: "Email skal indeholde @"});
                
                } 
            }

            if (phoneNumber){
                if(!phoneNumber.match(PhoneRegex)){
                    console.log("Telefon nr skal indeholde 8 digits ");
                    return res.status(400).send({ response: "Phonenumber should contain 8 digits"});
                }

                if (phoneNumber.length > 8) {
                    return res.status(400).send({ response: "Zipcode must be 4 digits long"});
                }
            }

            if (zipCode) {
                if (!zipCode.match(ZipRegex)){
                    console.log("Zipcode skal indeholde 4 digits ");
                    return res.status(400).send({ response: "Zipcode should contain 4 digits"});
                }

                if (zipCode.length > 4) {
                    return res.status(400).send({ response: "Zipcode must be 4 digits long"});
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



                /*
                if (password.match(/[A-Z]+/g)) {
                    const passwordTester = password;
                    /[A-Z]+/g.test(passwordTester)
                    console.log(passwordTester);
                    
                } else {
                    return res.status(400).send({ response: "Password should contain one capital letter"});
                }
                */
            } 
            } 
            
            
        
        } catch {
                
    }
    
    console.log(req.body);
});

module.exports = router;
