const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  body: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
  lastEdited: {
    type: Date,
    default: new Date()
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User"
  },
  post: {
    type: mongoose.Schema.ObjectId,
    ref: "Posts"
  }
});

const Comment = mongoose.model("Comments", CommentSchema);

module.exports = Comment;
