const Profile = require("../model/Profile");
const Post = require("../model/Post");

const getProflie = async (req, res, next) => {
  try {
    const profile = await Profile.findOne({
      username: req.body.username,
    }).populate("posts");
    res.json(profile);
  } catch (err) {
    console.log(err);
    const error = new HttpError("Something went wrong", 500);
    return next(error);
  }
};

const followUser = async (req, res, next) => {
  try {
    const userToFollow = await Profile.findOne({ username: req.body.username });
    const currentUser = await Profile.findOne({ username: req.user.username });

    if (!userToFollow || !currentUser) {
      return res.status(404).json({ message: "User not found" });
    }

    userToFollow.followers.push(currentUser.username);
    currentUser.following.push(userToFollow.username);

    await userToFollow.save();
    await currentUser.save();

    res.json({ message: "Followed successfully" });
  } catch (err) {
    console.log(err);
    const error = new HttpError("Something went wrong", 500);
    return next(error);
  }
};

exports.getProflie = getProflie;
exports.followUser = followUser;
