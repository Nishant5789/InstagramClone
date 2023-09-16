const express = require("express");
const router = express.Router();

const {createStory,deleteStory} = require("../controllers/storyControllers");

//router.route("/:UserId").get(getPosts);
/*
router.route("/like/:UserId/:PostId").put(likePost);
*/
router.route("/:UserId/createpost").post(createStory);

router.route("/:UserId/:StoryId").delete(deleteStory);

//router.route("/comment/:UserId/:PostId").post(commentPost);

module.exports = router;