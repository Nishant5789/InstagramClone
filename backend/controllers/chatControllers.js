const asyncHandler = require("express-async-handler");
const Post = require("../models/postModel");
const { post } = require("../routes/postRoutes");
const User = require("../models/userModel");
const Comment = require("../models/commentModel");
const Chat = require("../models/chatModel");

//@dec Get all chats
//@route GET /api/chat/:Userid
//@acsess public 
const getAllChats = asyncHandler( async (req,res) => {
    const chats = await Chat.find(SenderUserId = req.params.UserId).sort(timestamps);
    res.status(200).json(chats);
});

//@dec add a chat
//@route POST /api/chat/:Chatid/
//@acsess public
const addChatMessage = asyncHandler( async (req,res) => {
    //const chat = await Chat.findById(req.params.ChatId);

    try {
        const newChat = await Chat.create({
            ChatId: req.body.ChatId,
            SenderUserId: req.body.SenderUserId,
            ContentMessage: req.body.ContentMessage,
            ContentType: req.body.ContentType
        })
            
        const addChat = Chat.findById(newChat._id);
    
        res.status(200).json(addChat);
            
    } catch (error) {
        console.log(error);
    }
    
});

//@dec get a chat
//@route GET /api/chat/:Chatid
//@acsess public
const getchat = asyncHandler( async (req,res) => {

    try{
        const chat = await Chat.findById(req.params.ChatId);

        res.status(200).json(chat);
    }
    catch(error){
        console.log(error);
    }
});

module.exports = {getAllChats,addChatMessage,getchat};