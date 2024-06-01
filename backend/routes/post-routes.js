const express = require("express");
const {
  likePost,
  commentOnPost,
  getPostsByCategory,
  createPost,
} = require("../controller/post-controller");
const authenticate = require("../middleware/auth");

const router = express.Router();

router.post("/", authenticate, createPost);
router.post("/:postId/like", authenticate, likePost);
router.post("/:postId/comment", authenticate, commentOnPost);
router.get("/category/:category", authenticate, getPostsByCategory);

module.exports = router;
