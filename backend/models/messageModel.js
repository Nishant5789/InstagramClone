const { ObjectId } = require("bson");
const mongoose = require("mongoose");

const messageSchema = mongoose.Schema(
    {
        ChatId: {
            type: String,
        },
        SenderUserId: {
            type: ObjectId,
            ref: "User"
        },
        ContentMessage: {
            type: String,
        },
        ContentType: {
            type: String,
        },
    },
    {
        timestamps: true,
    }  
);

module.exports = mongoose.model("Message", messageSchema)