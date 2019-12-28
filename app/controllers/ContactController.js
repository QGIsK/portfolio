const DB = require("../../database");
const Mail = require("../helpers/mail");

const mailTo = process.env.MAIL_TO;

exports.store = async (req, res) => {
  try {
    const from = req.sanitize(req.body.from);
    const email = req.sanitize(req.body.email);
    const subject = req.sanitize(req.body.subject);
    const body = req.sanitize(req.body.body);

    if (!from || !email || !subject || !body)
      return res.status(422).json({ error: "Please provide all fields" });

    const mailOptions = {
      from,
      to: mailTo,
      subject,
      text: body,
    };

    await Mail.send(mailOptions);

    new DB.Contact({
      from,
      email,
      subject,
      body,
    }).save();

    res.status(200).json({ msg: "Email has been send!" });
  } catch (err) {
    console.log(err);
    res.status(500).json("Server error");
  }
};
