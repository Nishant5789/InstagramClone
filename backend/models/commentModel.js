const { ObjectId } = require("bson");
const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
    {
        CommentContent : {
            type: String,

        },
        CommentedBy: {
            type: ObjectId,
            ref: "User"
        },
        
    },
    {
        timestamps: true,
    }  
);

module.exports = mongoose.model("Comment", commentSchema)