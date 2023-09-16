const express = require("express");
const router = express.Router();

const {addChatMessage,getchat} = require("../controllers/chatControllers");

router.route("/:chatId").get(getchat);
router.route("/:UserId").post(addChatMessage);

/*
router.route("/like/:UserId/:PostId").put(likePost);

router.route("/:UserId/createpost").post(createPost);

router.route("/:UserId/:PostId").delete(deletePost);

router.route("/comment/:UserId/:PostId").post(commentPost);
*/
module.exports = router;