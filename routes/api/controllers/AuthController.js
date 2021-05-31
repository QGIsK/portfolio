const DB = require("@database");

exports.login = async (req, res) => {
  let { email, password } = req.body;
  try {
    if (!password || !email)
      return res.status(403).json({ msg: "Please fill in all fields correctly." });

    const foundUser = await DB.User.findOne({
      email: email.toLowerCase(),
    });

    if (!foundUser) {
      return res.status(403).json({ msg: "Unauthorized." });
    }

    const auth = await foundUser.comparePassword(password);

    if (!auth) {
      return res.status(403).json({ msg: "Unauthorized." });
    }

    let token = await jwt.sign(
      {
        id: foundUser._id,
      },
      secret,
      {
        expiresIn: "1d",
      }
    );

    const user = await DB.User.findById(foundUser.id).select(select.user);

    res.status(200).json({
      token,
      user,
    });
  } catch (err) {
    next(err);
  }
};
