const express = require("express");
const router = express.Router();

const {getUsers,createUser,getUser,updateUser,deleteUser} = require("../controllers/userControllers");

router.route("/").get(getUsers);

router.route("/createuser").post(createUser);

router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;