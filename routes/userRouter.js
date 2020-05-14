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
        if (password && confirmPassword && firstName && lastName && email && phoneNumber && address && zipCode && city && username) {
            
            // Regular Expressions
            // Searching for Capital letters in range A-Z
            const capLetterRegex = /[A-Z]+/g
            // Searching for digits in range 0-9
            const numbersRegex = /[0-9]/g
            // Searching for @
            const emailRegex = /[@]+/g
            // Searching for 8 digits
            const phoneRegex = /\d{8}/g
            // Searching for 4 digits
            const zipRegex = /\d{4}/g
            // Searching for whitespaces
            const whiteSpaceRegex = /\s/g
            
            //Password validation
            if (password && confirmPassword) {
                
                //Checking the length of the password
                if (password.length < 8) {
                    return res.status(400).send({ response: "Password must be 8 characters or longer"});
                } 
                   
                //Checking if password and confirmPassword is the same
                if (password !== confirmPassword) {
                    return res.status(400).send({ response: "Password and confirm password needs to be the same"});
                } 
                
                //Checking if the password contains a minimum of one capital letter
                if (capLetterRegex.test(password) == false){
                    return res.status(400).send({ response: "Password should contain minimum one capital letter"});
                }

                //Checking if the password contains a minimum of one digit
                if (numbersRegex.test(password) == false) {
                    return res.status(400).send({ response: "Password should contain minimum one digit"});
                }
            
            //Email validation
            if (email) {
                //Checking that the email contains a @
                if (!email.match(emailRegex)) {
                    return res.status(400).send({ response: "Email must contain @"});
                } 
            }

            //Phone number validation
            if (phoneNumber){

                //Checking that the phone number contains 8 digits
                if(!phoneNumber.match(phoneRegex)){
                    return res.status(400).send({ response: "Phonenumber should contain 8 digits"});
                }

                //Checking that the phone number has no more than 8 digits
                if (phoneNumber.length > 8) {
                    return res.status(400).send({ response: "Phonenumber must be 8 digits long"});
                }
            }

            //Zip code validation
            if (zipCode) {

                //Checking that th zip code is 4 digits
                if (!zipCode.match(zipRegex)){
                    return res.status(400).send({ response: "Zipcode should contain 4 digits"});
                }

                //Checking that the zip code has no more that 4 digits.
                if (zipCode.length > 4) {
                    return res.status(400).send({ response: "Zipcode must be 4 digits long"});
                } 
            }

            //Input Validation
            if(firstName && lastName && address && city && username) {

                //Checking that the input is whitespace
                if (firstName.match(whiteSpaceRegex)){
                    return res.status(400).send({ response: "Firstname cannot be whitespace"});
                }

                //Checking that the input is whitespace
                if(lastName.match(whiteSpaceRegex)) {
                    return res.status(400).send({ response: "Lastname cannot be whitespace"});
                }

                //Checking that the input is whitespace
                if(address.match(whiteSpaceRegex)) {
                    return res.status(400).send({ response: "Address cannot be whitespace"});
                }

                //Checking that the input is whitespace
                if(city.match(whiteSpaceRegex)) {
                    return res.status(400).send({ response: "City cannot be whitespace"});
                }

                //Checking that the input is whitespace
                if(username.match(whiteSpaceRegex)) {
                    return res.status(400).send({ response: "Username cannot contain whitespaces"});
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
