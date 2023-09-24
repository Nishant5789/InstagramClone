const asyncHandler = require("express-async-handler");
const Post = require("../models/postModel");
const { post } = require("../routes/postRoutes");
const User = require("../models/userModel");
const Comment = require("../models/commentModel");
const Chat = require("../models/chatModel");
const Story = require("../models/storyModel");


//@dec Create new story
//@route POST /api/story/createstory/:UserId
//@acsess public 
const createStory = asyncHandler(async (req,res) => {
    try {
        console.log("The request body is : ",req.body);
        const {CurentStory,CurentStoryType,StoryPath} = req.body;

        if(!CurentStory || !CurentStoryType || !CurentStoryType || !req.params.UserId)
        {
            res.status(400);
            throw new Error("All fields are required.");
        }

        const story1 = await Story.create({
            User: req.params.UserId,
            CurentStory: CurentStory,
            CurentStoryType: CurentStoryType,
            StoryPath: StoryPath,
        });
        
        const user1 = await User.findByIdAndUpdate(req.params.UserId,
            {
                $push: { Story: story1._id }, 
            },
            { new: true }
        );
        console.log(user1);

        res.status(201).json(story1);

    } catch (error) {
        console.log(error);
        res.status(500).json(error.message);
    }
    
});


// get story of following by timestamp
//@dec Get a story of following
//@route GET /api/story/getstorybyfollowinguser/:UserId
//@acsess public 
const getstorybyfollowinguser = asyncHandler(async (req,res) => {
    try {
        const user1 = await User.findById(req.params.UserId);
        const user1Following = user1.FollowingUser;
        console.log({user1Following});

        // const users = await User.findById(user1Following); // user1Following.Story;
        // console.log(users);

        const currentTime = new Date();  // Current date and time
        console.log(currentTime);
        const twentyFourHoursAgo = new Date(currentTime - 24 * 60 * 60 * 1000);
        console.log(twentyFourHoursAgo);

        let allStorys = [];

        const getstory = async(Id)=>{
            // console.log(Id);
            const newStory = await Story.find({
                User: Id,
                createdAt: {
                  $gte: twentyFourHoursAgo,
                  $lt: currentTime
                }
              }
            ).populate("User");
            return newStory;
        }
        
        // const docs = await  user1Following.forEach(async(item) => {
        //     const abc = await getstory(item.toString());
        //     console.log(abc);
        // })

        // console.log("send");

        // only get the status of firest folowing user
        res.status(200).json(await getstory(user1Following[0].toString()));
    }catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
})

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

module.exports = {createStory,deleteStory,getstorybyfollowinguser};