const DB = require("../../database");
const Mail = require("../helpers/mail");

const mailTo = process.env.MAIL_TO;

exports.store = async (req, res) => {
  try {
    const from = req.sanitize(req.body.from);
    const email = req.sanitize(req.body.email);
    const time = req.sanitize(req.body.time);
    const body = req.sanitize(req.body.body);

    if (!from || !time || !email || !body)
      return res.status(422).json({ error: "Please provide all fields" });

    const mailOptions = {
      from: from,
      to: mailTo,
      // subject,
      text: `time: ${time}, \nMessage: ${body}`,
    };

    await Mail.send(mailOptions);

    new DB.Contact({
      from,
      email,
      time,
      body,
    }).save();

    res.status(200).json({ msg: "Email has been send!" });
  } catch (err) {
    console.log(err);
    res.status(500).json("Server error");
  }
};
