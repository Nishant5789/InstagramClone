const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Request = require("../models/requestModel");


//@dec Get all requests
//@route GET /api/request/:UserId
//@acsess public 
const getRequests = asyncHandler( async (req,res) => {
    const requests = await Request.findById(RequestReciverUser = req.params.UserId).sort(timestams);
    res.status(200).json(requests);
});


//@dec Create new Request
//@route POST /api/request/:UserId/:ReciverId/createpost
//@acsess public 
const createRequest = asyncHandler(async (req,res) => {
    console.log("The request body is : ",req.body);
    const {Msg} = req.body;

    /*if(!PostType || !Postpath )
    {
        res.status(400);
        throw new Error("All fields are required.");
    }*/

    const request1 = await Request.create({
        ReuestSenderUser: req.params.UserId,
        RequestReciverUser: req.params.ReciverId,
        IsFollowback: false,
        StatusRequest: "Pending",
        Msg: Msg,
    });
    
    const user1 = await User.findByIdAndUpdate(req.params.ReciverId,
        {
            $push: { Request: request1._id }, // Add the new postid to the AllPost array
        },
        { new: true }
    );
    console.log(user1);

    res.status(201).json(request1);
});

//@dec update a request
//@route PUT /api/request/:UserId/:RequestId
//@acsess public
const updateRequest = asyncHandler(async (req,res) => {
    const request1 = await Request.findById(req.params.RequestId);
    if(!request1)
    {
        res.status(404);
        throw new Error("request not found.");
    }

    const updateRequest = await Request.findByIdAndUpdate(
        req.params.RequestId,
        req.body,
        {new : true},
    )
    console.log(updateRequest),
    res.status(200).json(updateRequest);
});

/*
//@dec delete a post
//@route DELETE /api/post/:UserId/:PostId
//@acsess public
const deletePost = asyncHandler( async (req,res) => {
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

    
    await Post.findByIdAndRemove(req.params.PostId);
    const user1 = await User.findByIdAndUpdate(req.params.UserId,
        {
            $pull: { AllPost: post1._id }, // Add the new postid to the AllPost array
        },
        { new: true }
    );
    console.log(user1);

    res.status(200).json(post1);
});
*/

/*
//@dec get a user
//@route GET /api/post/:id
//@acsess public
const getPost = asyncHandler( async (req,res) => {
    const post1 = await Post.findById(req.params.id);

    if(!post1)
    {
        res.status(404);
        throw new Error("User not found.");
    }

    res.status(200).json(user);
});
*/

/*

*/


module.exports = {getRequests,createRequest,updateRequest,};