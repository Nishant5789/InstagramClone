const express = require("express");
const router = express.Router();

const {getRequests,createRequest,updateRequest} = require("../controllers/requestControllers");

router.route("/:UserId").get(getRequests);

router.route("/:UserId/:RequestId").put(updateRequest);

router.route("/createRequest/:UserId/:ReceiverId").post(createRequest);

module.exports = router;