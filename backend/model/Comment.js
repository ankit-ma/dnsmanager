const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  commentOwner: { type: String, required: true },
  commentOn: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
  createdOn: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Comment", CommentSchema);
