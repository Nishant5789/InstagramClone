const asyncHandler = require("express-async-handler");
const { post } = require("../routes/postRoutes");
const { User } = require("../models/userModel");
const { Comment } = require("../models/commentModel");
const e = require("express");
const Post = require("../models/postModel");


//@dec Get all posts
//@route GET /api/post/:UserId
//@acsess public 
const getPosts = asyncHandler(async (req, res) => {
    const posts = await Post.find({ UserId: req.params.UserId }).populate(
        {
            path: 'Comment',
            populate: {
                path: 'CommentedBy'
            }
        }
    ).populate("UserId");

    res.status(200).json(posts);
});


//@dec Create new post
//@route POST /api/post/createpost/:UserId
//@acsess public 
const createPost = asyncHandler(async (req, res) => {

    try{
        console.log("The request body is : ",req.body);
        const {PostType,PostPath,Taggeduser} = req.body;

        if(!PostType || !PostPath )
        {
            res.status(400).json({msg:"All fields are required."});
            throw new Error("All fields are required.");
        }

        const post1 = await Post.create({
            UserId: req.params.UserId,
            ...req.body,
            TotalLikes: 0,
        });

        const user1 = await User.findByIdAndUpdate(req.params.UserId,
            {
                $push: { AllPost: post1.id }, // Add the new postid to the AllPost array
            },
            { new: true }
        );
        console.log(user1);
        const post2 = await Post.findById(post1.id).populate("UserId");
        res.status(201).json(post2);
    }
    catch (error) {
        console.log(error);
    }
});

//@dec delete a post
//@route DELETE /api/post/:UserId/:PostId
//@acsess public
const deletePost = asyncHandler(async (req, res) => {
    try {
        const user = await User.findById(req.params.UserId);
        if (!user) {
            res.status(400).json({ msg: "User not found." });
            throw new Error("User not found.");
        }

        const post1 = await Post.findById(req.params.PostId);
        if (!post1) {
            res.status(400).json({ msg: "Post not found." });
            throw new Error("Post not found.");
        }


        await Post.findByIdAndRemove(req.params.PostId);
        const user1 = await User.findByIdAndUpdate(req.params.UserId,
            {
                $pull: { AllPost: post1._id }, // Add the new postid to the AllPost array
            },
            { new: true }
        );
        console.log(user1);

        res.status(200).json({});
    } catch (error) {
        console.log(error);
    }

});

//@dec comment in post
//@route DELETE /api/post/comment/:UserId/:PostId
//@acsess public
const commentPost = asyncHandler(async (req, res) => {
    try {
        console.log("The request body is : ", req.body);
        const { Commentcontent } = req.body;

        if (!Commentcontent) {
            res.status(400).json({ msg: "All fields are required." });
            throw new Error("All fields are required.");
        }

        const user = await User.findById(req.params.UserId);
        if (!user) {
            res.status(404).json({ msg: "User not found." });;;
            throw new Error("User not found.");
        }

        const post1 = await Post.findById(req.params.PostId);
        if (!post1) {
            res.status(404).json({ msg: "Post not found." });;;
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
        const newComment = await Comment.findById(comment1._id).populate("CommentedBy");
        res.status(200).json(newComment);

    } catch (error) {
        console.log(error);
    }

});

//@dec like a post
//@route PUT /api/post/like/:UserId/:PostId
//@acsess public
const likePost = asyncHandler(async (req, res) => {

    try {
        const user = await User.findById(req.params.UserId);
        if (!user) {
            res.status(404).json({ msg: "User not found." });
        }

        const post1 = await Post.findById(req.params.PostId).populate("Comment").populate("UserId");
        if (!post1) {
            res.status(404).json({ msg: "Post not found." });
            throw new Error("Post not found.");
        }

        // Check if the user has already liked the post
        if (post1.LikedByUsers.includes(req.params.UserId)) {
            res.status(400).json({ msg: "User has already liked this post." });
            throw new Error("User has already liked this post.");
        }

        // Add the user's ID to the LikedByUsers array
        post1.LikedByUsers.push(req.params.UserId);

        // Update the TotalLikes count
        post1.TotalLikes = post1.LikedByUsers.length;

        // Save the updated post
        const post2 = await post1.save();
        console.log(user);
        console.log(post2);
        res.status(200).json(post1);

    } catch (error) {
        console.log(error);
    }
});


module.exports = { getPosts, createPost, deletePost, commentPost, likePost };