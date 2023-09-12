const express = require("express");
const router = express.Router();

const {getChats/*,createPost,commentPost,deletePost,likePost*/} = require("../controllers/chatControllers");

router.route("/:UserId").get(getChats);
/*
router.route("/like/:UserId/:PostId").put(likePost);

router.route("/:UserId/createpost").post(createPost);

router.route("/:UserId/:PostId").delete(deletePost);

router.route("/comment/:UserId/:PostId").post(commentPost);
*/
module.exports = router;