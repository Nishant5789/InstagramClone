const asyncHandler = require("express-async-handler");
const Request = require("../models/requestModel");
const mongoose = require('mongoose');
const User = require("../models/userModel");

//@dec Get all requests
//@route GET /api/request/:UserId
//@acsess public 
const getRequests = asyncHandler( async (req,res) => {
    const requests = await Request.find({RequestReceiverUser : req.params.UserId}).populate("RequestReceiverUser").populate("RequestSenderUser");//.sort(timestamps);
    res.status(200).json(requests);
});


//@dec Create new Request
//@route POST /api/request/createrequest/:UserId/:ReceiverId
//@acsess public 
const createRequest = asyncHandler(async (req,res) => {

    try {
        console.log("The request body is : ",req.body);
        const {Msg} = req.body;
        
        /*
        const req_data = await Request.find(
            RequestSenderUser= req.params.UserId
        ).getFilter(RequestReceiverUser= req.params.ReceiverId);
        console.log(req_data);

        const re = req_data.find({
            RequestReceiverUser: req.params.ReceiverId
        })
        console.log(re);
        */
        console.log(req.params.UserId);
        console.log(req.params.ReceiverId);
        const existingRequest = await Request.findOne({
            RequestSenderUser: req.params.UserId,
            RequestReceiverUser: req.params.ReceiverId,
        });

        if(existingRequest)
        {
            res.status(403);
            throw new Error("request is already there.");
        }
        const request1 = await Request.create({
            RequestSenderUser: req.params.UserId,
            RequestReceiverUser: req.params.ReceiverId,
            IsFollowback: false,
            StatusRequest: "Pending",
            Msg: Msg,
        });
        
        const user1 = await User.findByIdAndUpdate(req.params.ReceiverId,
            {
                $push: { Request: request1._id }, // Add the new postid to the AllPost array
            },
            { new: true }
        );
        console.log(user1);

        res.status(201).json(request1);

    } catch (error) {
        console.log(error);
    }
    
});

//@dec update a request
//@route PUT /api/request/:UserId/:RequestId
//@acsess public
const updateRequest = asyncHandler(async (req,res) => {

    const requestId = new mongoose.Types.ObjectId(req.params.RequestId);
    const userId = new mongoose.Types.ObjectId(req.params.UserId);
    console.log(req.params.RequestId);
    console.log(req.params.UserId);

    const request1 = await Request.findOne({
        _id: requestId,
        RequestReceiverUser: req.params.UserId
    });
    const req1 = await Request.find({_id : req.params.RequestId});
    console.log(req1);
    console.log(request1);

    if(request1 ==  null)
    {
        res.status(404).json({msg: 'Request not found'});
        throw new Error("request not found.");
    }
    var updateRequest;
    

    if(req.body.StatusRequest == "Accepted") //if it is requeset accepted then do this
    {
        updateRequest = await Request.findByIdAndUpdate(
            req.params.RequestId,
            req.body,
            {new : true},
        )
        console.log(updateRequest);
        console.log("updateRequest.RequestSenderUser");
        console.log(updateRequest.RequestSenderUser);
        console.log("updateRequest.RequestSenderUser");
        console.log(updateRequest.RequestReceiverUser);
        const f = await User.findOne({
            _id: updateRequest.RequestReceiverUser,
            FollowersUser: updateRequest.RequestSenderUser
        });
        console.log(" f = ${f}");
        console.log(f);
        if(!f)
        {
            const reqacceptedUser = await User.findOneAndUpdate(FollowingUser = updateRequest.RequestReceiverUser,
                {
                    $push:{ FollowersUser: updateRequest.RequestSenderUser}
                },
                {new : true}
            );
            console.log(reqacceptedUser);

            const reqsenderUser = await User.findOneAndUpdate(FollowersUser = updateRequest.RequestSenderUser,
                {
                    $push: { FollowingUser: updateRequest.RequestReceiverUser },
                },
                { new: true }
            );
            console.log(reqsenderUser);
        }
        
        
        const user3 = await User.findById(req.params.UserId);
        console.log("user 3 :");
        console.log(user3);
            
        let ismyfollowing = null;
        try{
            ismyfollowing = await user3.FollowingUser.includes(updateRequest.RequestSenderUser);
            console.log("is my FollowingUser");
            console.log(ismyfollowing);
            if(!ismyfollowing)
            {
                let message = updateRequest.RequestSenderUser;
                let message1 = message + " has started following you.";
                updateRequest1 = await Request.findByIdAndUpdate(
                    req.params.RequestId,
                    {Msg : message1},
                    {new : true},
                )
                return  res.status(200).json({"msg": "Do you want to followback"});
            }
            else{
                updateRequest1 = await Request.findByIdAndUpdate(
                    req.params.RequestId,
                    {IsFollowback : true},
                    {new : true},
                );

                updateRequest2 = await Request.findOneAndUpdate({FollowersUser : updateRequest1.FollowingUser,FollowingUser: updateRequest1.FollowersUser},
                    {
                        IsFollowback :true,
                    },
                    { new :true},
                );
                return  res.status(200).json({"msg": "you following each other"});
            }
        }
        catch (error) {
            console.error('Error finding follower:', error);
            //res.status(500).json({ error: 'Server error.' });
        }
        
        console.log(updateRequest),
        res.status(200);
    }

    if(req.body.StatusRequest == "Decline")
    {
        const request1 = await Request.findById(req.params.PostId);
        if(!request1)
        {
            res.status(400).json({msg:"Request not found."});
            throw new Error("Request not found.");
        }
        await Request.findByIdAndRemove(req.params.RequestId);
        
        const user1 = await User.findByIdAndUpdate(req.params.UserId,
            {
                $pull: { Request: request1._id }, 
            },
            { new: true }
        );
        console.log(user1);
        return res.status(200).json(updateRequest);
    }
    console.log(updateRequest),
    res.status(200).json(updateRequest);
});



module.exports = {getRequests,createRequest,updateRequest};