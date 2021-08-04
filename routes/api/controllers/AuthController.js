const DB = require("@database");
const jwt = require("jsonwebtoken");

const { JWT_SECRET } = process.env;

exports.login = async (req, res) => {
  let { email, password } = req.body;
  try {
    if (!email || !password)
      return res.status(403).json({ message: "Please fill in all fields correctly." });

    const foundAdmin = await DB.Admin.findOne({
      email: email.toLowerCase(),
    });

    if (!foundAdmin) {
      return res.status(403).json({ message: "Unauthorized." });
    }

    const auth = await foundAdmin.comparePassword(password);

    if (!auth) {
      return res.status(403).json({ message: "Unauthorized." });
    }

    let token = await jwt.sign(
      {
        id: foundAdmin._id,
      },
      JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    const admin = await DB.Admin.findById(foundAdmin._id).select("name email");

    res.status(200).json({
      token,
      admin,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json("Server error");
  }
};
