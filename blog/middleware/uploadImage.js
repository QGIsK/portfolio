// uploadImage

const multer = require("multer");

const upload = multer({
  limits: {
    fileSize: 4 * 2000 * 2000
  }
});

module.exports = upload;
