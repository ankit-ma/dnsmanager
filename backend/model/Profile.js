const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
  followers: [{ type: String }],
  following: [{ type: String }],
});

module.exports = mongoose.model("Profile", ProfileSchema);
