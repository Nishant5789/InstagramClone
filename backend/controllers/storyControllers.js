const asyncHandler = require("express-async-handler");
const Post = require("../models/postModel");
const { post } = require("../routes/postRoutes");
const User = require("../models/userModel");
const Comment = require("../models/commentModel");
const Chat = require("../models/chatModel");
const Story = require("../models/storyModel");

/*
//@dec Get all chats
//@route GET /api/chat/:ChatId
//@acsess public 
const getChats = asyncHandler( async (req,res) => {
    const chats = await Chat.findById(req.params.ChatId).sort(timestams);
    res.status(200).json(chats);
});
*/

//@dec Create new story
//@route POST /api/story/:UserId/createstory
//@acsess public 
const createStory = asyncHandler(async (req,res) => {
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
});


//@dec delete a story
//@route DELETE /api/story/:UserId/:StoryId
//@acsess public
const deleteStory = asyncHandler( async (req,res) => {
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
});


/*
//@dec comment in post
//@route DELETE /api/post/comment/:Userid/:Postid
//@acsess public
const commentPost = asyncHandler( async (req,res) => {
    console.log("The request body is : ",req.body);
    const {Commentcontent} = req.body;

    if(!Commentcontent )
    {
        res.status(400);
        throw new Error("All fields are required.");
    }

    const user = await User.findById(req.params.UserId);
    if(!user)
    {
        res.status(404);
        throw new Error("User not found.");
    }

    const post1 = await Post.findById(req.params.PostId);
    if(!post1)
    {
        res.status(404);
        throw new Error("Post not found.");
    }
    
    const comment1 = await Comment.create({
        CommentContent: Commentcontent,
        CommentedBy: req.params.UserId,
    });

    const post2 = await Post.findByIdAndUpdate(req.params.PostId,
        {
            $push: { Comment: comment1._id }, // Add the new postid to the AllPost array
        },
        { new: true }
    );
    console.log(post2);

    res.status(200).json(post1);
});
/*
//@dec like a post
//@route PUT /api/post/like/:Userid/:Postid
//@acsess public
const likePost = asyncHandler( async (req,res) => {
    const user = await User.findById(req.params.UserId);
    if(!user)
    {
        res.status(404);
        throw new Error("User not found.");
    }

    const post1 = await Post.findById(req.params.PostId);
    if(!post1)
    {
        res.status(404);
        throw new Error("Post not found.");
    }

    // Check if the user has already liked the post
    if (post1.LikedByUsers.includes(req.params.UserId)) {
        res.status(400);
        throw new Error("User has already liked this post.");
    }

    // Add the user's ID to the LikedByUsers array
    post1.LikedByUsers.push(req.params.UserId);
    /*like = post1.TotalLikes + 1;
    //await Post.findByIdAndRemove(req.params.PostId);
    const post2 = await Post.findByIdAndUpdate(req.params.PostId,
        {
            $pull: { LikedByUsers: req.params.UserId }, // Add the new postid to the AllPost array
            TotalLikes : like,
        },
        { new: true }
    );

     // Update the TotalLikes count
     post1.TotalLikes = post1.LikedByUsers.length;

     // Save the updated post
     const post2 = await post1.save();
    console.log(user);
    console.log(post2);
    res.status(200).json(post2);
});*/
module.exports = {createStory,deleteStory};