const express = require("express");
const router = express.Router();

const {createStory,deleteStory,getstorybyfollowinguser} = require("../controllers/storyControllers");

router.route("/getstorybyfollowinguser/:UserId").get(getstorybyfollowinguser);

router.route("/createstory/:UserId").post(createStory);

router.route("/deletestory/:UserId/:StoryId").delete(deleteStory);


module.exports = router;