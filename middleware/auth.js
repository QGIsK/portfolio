const jwt = require("jsonwebtoken");
const db = require("@database/");

const { JWT_SECRET } = process.env;

module.exports = {
  ensureAuthenticated: async function (req, res, next) {
    try {
      let token =
        req.headers["x-access-token"] ||
        req.headers["authorization"] ||
        req.query.bearer ||
        req.query.authorization;
      if (token) {
        if (token.startsWith("Bearer ")) {
          token = token.slice(7, token.length);
        }
        jwt.verify(token, JWT_SECRET, async (err, decoded) => {
          if (err) {
            return res.status(403).json({ message: "Forbidden access" });
          }
          const user = await db.User.findById(decoded.id).select(select.user);

          if (!user) return res.status(403).json({ message: "Forbidden access" });

          req.user = user;
        });
      }

      return res.status(403).json({ message: "Forbidden access" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    }
  },
};
