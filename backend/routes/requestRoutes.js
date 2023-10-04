const express = require("express");
const router = express.Router();

const {getRequests,createRequest,updateRequest} = require("../controllers/requestControllers");

router.route("/").get(getRequests);

router.route("/:RequestId").put(updateRequest);

router.route("/createRequest/:ReceiverId").post(createRequest);

module.exports = router;