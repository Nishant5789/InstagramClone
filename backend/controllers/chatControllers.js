const asyncHandler = require("express-async-handler");
const Post = require("../models/postModel");
const { post } = require("../routes/postRoutes");
const User = require("../models/userModel");
const Comment = require("../models/commentModel");
const Chat = require("../models/chatModel");



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
        // console.log(newChat._id.toString());
            
        const addChat = await Chat.findById(newChat._id.toString());
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
        console.log(req.params.chatId);
        const chat = await Chat.find({ChatId:req.params.chatId});

        if(chat){
            res.status(200).json(chat);
        }
        else{
            res.status(400).json({"msg": "chat not found"});
        }   
    }
    catch(error){
        console.log(error);
    }
});

module.exports = {addChatMessage,getchat};