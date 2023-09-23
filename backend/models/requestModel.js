const { ObjectId } = require("bson");
const mongoose = require("mongoose");

const requestSchema = mongoose.Schema(
    {
        RequestSenderUser: {
            type: ObjectId,
            ref: "User"
        },
        RequestReceiverUser: {
            type: ObjectId,
            ref: "User"
        },
        IsFollowback: {
            type: Boolean,
        },
        StatusRequest: {
            type: String,
        },
        Msg: {
            type: String,
        },
    },
    {
        timestamps: true,
    }  
);

module.exports = mongoose.model("Request", requestSchema)