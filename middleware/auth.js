const jwt = require('jsonwebtoken');
const db = require('@database/');

const { JWT_SECRET } = process.env;

module.exports = {
  async ensureAuthenticated(req, res, next) {
    let token = req.headers['x-access-token'] || req.headers.authorization || req.query.bearer || req.query.authorization;

    if (token) {
      if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length);
      }
      jwt.verify(token, JWT_SECRET, async (err, decoded) => {
        if (err) {
          return res.status(403).json({ message: 'Forbidden access' });
        }
        const admin = await db.Admin.findById(decoded.id);

        if (!admin) return res.status(403).json({ message: 'Forbidden access' });

        req.admin = admin;
        return next();
      });
    } else {
      return res.status(403).json({ message: 'Forbidden access' });
    }
  },
};
