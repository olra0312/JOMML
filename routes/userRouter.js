const router = require('express').Router();
const User = require("../models/User.js");
const session = require('express-session');



//Defining file system as a standard library.
const fs = require("fs");


//GET METHODS
router.get("/createUser", (req, res) => {
    const page = fs.readFileSync("./public/createUser/createUser.html", "utf8");
    return res.send(page);
});

router.get("/updateUser", (req, res) => {
    const page = fs.readFileSync("./public/createUser/updateUser.html", "utf8");
    return res.send(page);
}); 


router.get("/login", (req, res) => {
    const page = fs.readFileSync("./public/login/login.html", "utf8")
    return res.send(page);
});

 router.get("/home", (req, res) => {
	const head = fs.readFileSync("./public/navbar/navbar.html", "utf8");
	const foot = fs.readFileSync("./public/footer/footer.html", "utf8");
	const page = fs.readFileSync("./public/home/home.html", "utf8");
	console.log(1, "home");
	return res.send(head + page + foot);
	
});

router.get("/getUsername", (req, res) => {
    console.log(req.session, "1");
    console.log(req.session, "hej");
    return res.send({ response: req.session });
 });


//POST METHODS
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

//Checks if the user input is the same as in the database//
router.post('/home', async (req, res) => {
    const { username, password } = req.body;
    try {
        console.log(1);
        const accountInfo = await User.query().select("username", "password").where("username", username);
        console.log(accountInfo);
        if (accountInfo.length === 1) {
            console.log(3);
            if (password === accountInfo[0].password) {
                console.log(4, req.session);
                req.session.login = true;
                req.session.username = username;
                console.log(req.session.username);
                console.log(req.session.login);
                return res.redirect("/home");
            }
        }
    }
    catch(error) {
        return res.send(error);
    }
});


module.exports = router;