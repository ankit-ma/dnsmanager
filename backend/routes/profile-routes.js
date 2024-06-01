const express = require("express");
const profileController = require("../controller/profile-controller");
const authenticate = require("../middleware/auth");

const router = express.Router();

router.get("/:username", profileController.getProflie);
router.post("/follow", profileController.followUser);

module.exports = router;
