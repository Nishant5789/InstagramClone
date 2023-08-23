const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
//@dec Get all users
//@route GET /api/users
//@acsess public 
const getUsers = asyncHandler( async (req,res) => {
    const users = await User.find()
    res.status(200).json(users);
});

//@dec Create new user
//@route POST /api/users/createuser
//@acsess public 
const createUser = asyncHandler(async (req,res) => {
    console.log("The request body is : ",req.body);
    const {Username,email,password} = req.body;

    if(!Username || !email || !password)
    {
        res.status(400);
        throw new Error("All fields are required.");
    }

    const user = await User.create({
        Username,
        email,
        password,
    });

    res.status(201).json(user);
});

//@dec get a user
//@route GET /api/users/:id
//@acsess public
const getUser = asyncHandler( async (req,res) => {
    const user = await User.findById(req.params.id);

    if(!user)
    {
        res.status(404);
        throw new Error("User not found.");
    }

    res.status(200).json(user);
});

//@dec update a user
//@route PUT /api/users/:id
//@acsess public
const updateUser = asyncHandler(async (req,res) => {
    const user = await User.findById(req.params.id);
    if(!user)
    {
        res.status(404);
        throw new Error("User not found.");
    }

    const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true},
    )
    res.status(200).json(updateUser);
});

//@dec delete a user
//@route DELETE /api/users/:id
//@acsess public
const deleteUser = asyncHandler( async (req,res) => {
    const user = await User.findById(req.params.id);
    if(!user)
    {
        res.status(404);
        throw new Error("User not found.");
    }

    await User.findByIdAndRemove(req.params.id,);
    res.status(200).json(user);
});


module.exports = {getUsers,createUser,getUser,updateUser,deleteUser};