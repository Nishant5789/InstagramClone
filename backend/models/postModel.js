const { ObjectId } = require("bson");
const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
    {
        PostType: {
            type: String,

        },
        Comment: {
            type: [ObjectId],
            ref: "User"
        },
        PostPath: {
            type: String,
        },
        TaggedUser:{
            type: [ObjectId],
            ref: "User"
        },
        UserId: {
            type: ObjectId,
            ref: "User"
        },
        LikedByUsers: {
            type: [ObjectId],
            ref: "User"
        },
        TotalLikes: {
            type: Number,
        },
    },
    {
        timestamps: true,
    }  
);

module.exports = mongoose.model("Post", postSchema)