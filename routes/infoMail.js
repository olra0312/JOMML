const nodemailer = require("nodemailer");
const mailInfo = require("../config/nodemail");

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: mailInfo.mail,
        pass: mailInfo.pass
    }
});



const mailOptions = {
    from: mailInfo.mail,
    to: ,
    subject: "StudieBøger",
    text: req.body.message
}
transporter.sendMail(mailOptions, (err, data) => {
if (err) {
        return console.log("error has occured",err)
}
console.log("Email sent")
});
  














