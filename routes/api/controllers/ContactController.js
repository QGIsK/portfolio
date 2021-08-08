const Mail = require('@helpers/Mail');

const mailTo = process.env.MAIL_TO;

exports.store = async (req, res) => {
  try {
    const { from, email, time, body } = req.body;

    if (!from || !time || !email || !body) return res.status(422).json({ error: 'Please provide all fields' });

    const mailOptions = {
      // from: from,
      to: mailTo,
      subject: `${from} - Contact Form`,
      text: `From: ${email}, \nTime: ${time}, \nMessage: ${body}`,
    };

    Mail.send(mailOptions)
      .then(() => {
        res.status(200).json({ message: 'Email has been send!' });
      })
      .catch((e) => {
        console.log(e);
        res.status(500).json('Server error');
      });
  } catch (err) {
    console.log(err);
    res.status(500).json('Server error');
  }
};
