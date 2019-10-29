const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "5f816efbf76bdc",
        pass: "45da6f8d102cde"
    }
});

exports.send = mail => {
    let mailOptions = mail;
    transporter.sendMail(mailOptions, e => {
        if (e) throw e;
        else console.log("Email send");
    });
};
