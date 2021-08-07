// dependencies
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const AdminSchema = mongoose.Schema({
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

AdminSchema.pre('save', function (next) {
  const admin = this;

  if (admin.isModified('email')) {
    admin.email = admin.email.toLowerCase();
  }

  if (admin.isModified('password')) {
    admin.password = bcrypt.hashSync(admin.password, 10);
  }

  next();
});

AdminSchema.methods.comparePassword = function (plaintext) {
  return bcrypt.compareSync(plaintext, this.password);
};

const Admin = mongoose.model('Admin', AdminSchema);

module.exports = Admin;
