const express = require("express");
const router = express.Router();

const {getPosts,createPost,commentPost,deletePost,likePost} = require("../controllers/postControllers");

router.route("/:UserId").get(getPosts);

router.route("/like/:UserId/:PostId").put(likePost);

router.route("/:UserId/createpost").post(createPost);

router.route("/:UserId/:PostId").delete(deletePost);

router.route("/comment/:UserId/:PostId").post(commentPost);

module.exports = router;