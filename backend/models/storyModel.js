const { ObjectId } = require("bson");
const mongoose = require("mongoose");

const storySchema = mongoose.Schema(
    {
        
        CurentStory: {
            type: String
        },
        CurentStoryType : {
            type: String,
        },
        StoryPath: {
            type: String,
        },
    },
    {
        timestamps: true,
    }  
);

module.exports = mongoose.model("Story", storySchema)