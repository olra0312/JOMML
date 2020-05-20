const router = require('express').Router();
//Defining file system as a standard library.
const fs = require('fs');

router.get("/browseBooks", (req, res) => {
    const head = fs.readFileSync("./public/navbar/navbar.html", "utf8");
    const body = fs.readFileSync("./public/browseBooks/browseBooks.html", "utf8");
    const foot = fs.readFileSync("./public/footer/footer.html");

    return res.send(head + body + foot);
})


module.exports = router;