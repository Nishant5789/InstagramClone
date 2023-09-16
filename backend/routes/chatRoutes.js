const express = require("express");
const router = express.Router();

const {getAllChats,addChatMessage,getchat} = require("../controllers/chatControllers");

router.route("/:UserId").get(getAllChats);
/*
router.route("/like/:UserId/:PostId").put(likePost);

router.route("/:UserId/createpost").post(createPost);

router.route("/:UserId/:PostId").delete(deletePost);

router.route("/comment/:UserId/:PostId").post(commentPost);
*/
module.exports = router;