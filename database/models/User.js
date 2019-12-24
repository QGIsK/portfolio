//dependencies
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const timestamps = require("mongoose-timestamp");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.plugin(timestamps);

UserSchema.pre("save", function(next) {
  let user = this;

  if (user.isModified("email")) {
    user.email = user.email.toLowerCase();
  }

  if (user.isModified("password")) {
    user.password = bcrypt.hashSync(user.password, 10);
  }

  next();
});

UserSchema.methods.comparePassword = function(plaintext, callback) {
  return bcrypt.compareSync(plaintext, this.password);
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
