const asyncHandler = require("express-async-handler");
const Post = require("../models/postModel");
const { post } = require("../routes/postRoutes");
const User = require("../models/userModel");
const Comment = require("../models/commentModel");
const Chat = require("../models/chatModel");
const Story = require("../models/storyModel");


//@dec Create new story
//@route POST /api/story/:UserId/createstory
//@acsess public 
const createStory = asyncHandler(async (req,res) => {
    
    try {
        console.log("The request body is : ",req.body);
        const {PostType,Postpath,Taggeduser} = req.body;

        if(!PostType || !Postpath )
        {
            res.status(400);
            throw new Error("All fields are required.");
        }

        const post1 = await Post.create({
            PostType: PostType,
            UserId: req.params.UserId,
            PostPath: Postpath,
            TaggedUser: Taggeduser,
            TotalLikes: 0,
        });
        
        const user1 = await User.findByIdAndUpdate(req.params.UserId,
            {
                $push: { AllPost: post1._id }, // Add the new postid to the AllPost array
            },
            { new: true }
        );
        console.log(user1);

        res.status(201).json(post1);

    } catch (error) {
        console.log(error);
    }
    
});


//@dec delete a story
//@route DELETE /api/story/:UserId/:StoryId
//@acsess public
const deleteStory = asyncHandler( async (req,res) => {

    try {
        const user = await User.findById(req.params.UserId);
        if(!user)
        {
            res.status(404);
            throw new Error("User not found.");
        }

        const story1 = await Story.findById(req.params.StoryId);
        if(!story1)
        {
            res.status(404);
            throw new Error("Story not found.");
        }

        
        await Story.findByIdAndRemove(req.params.StoryId);
        const user1 = await User.findByIdAndUpdate(req.params.UserId,
            {
                $pull: { Story: story1._id }, // Add the new postid to the AllPost array
            },
            { new: true }
        );
        console.log(user1);

        res.status(200).json(post1);

    } catch (error) {
        console.log(error);
    }
    
});

module.exports = {createStory,deleteStory};