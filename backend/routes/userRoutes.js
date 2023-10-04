const express = require("express");
const router = express.Router();

const {getUsers,createUser,getUser,updateUser,deleteUser,searchUser,getUserID} = require("../controllers/userControllers");

router.route("/").get(getUsers);
router.route("/getUserID").get(getUserID);

router.route("/search").get(searchUser);

router.route("/createuser").post(createUser);

router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;