const router = require("express").router;

const fs = require("fs");

router.get("/updateUser", (req, res) => {

    const head = fs.readFileSync("./public/navbar/navbar.html", "utf8")
    const page = fs.readFileSync("./public/createUser/updateUser.html", "utf8");
    const foot = fs.readFileSync("./public/footer/footer.html", "utf8");
    
    


    return res.send(head + page + foot)

});