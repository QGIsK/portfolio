const rateLimit = require("express-rate-limit");

exports.Auth = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour window
  max: 5, // start blocking after 5 requests
  message: "Too many attempts from this IP, please try again later",
});

exports.File = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour window
  max: 30, // start blocking after 30 requests
  message: "Too many attempts from this IP, please try again later",
});

exports.Contact = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour window
  max: 2, // start blocking after 2 requests
  message: "Too many attempts from this IP, please try again later",
});

exports.Limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour window
  max: 120, // start blocking after 120 requests
  message: "Too many attempts from this IP, please try again later",
});
