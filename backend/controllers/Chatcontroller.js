import express from 'express';
import ChatModel from '../models/Chatmodel.js';


const router  = express.Router();


router.post('/chat', async (req, res) => {
    try {
        const { users, aichat, senderId, RecieverId } = req.body;
        const newChat = new ChatModel({ users, aichat, senderId, RecieverId });
        await newChat.save();
        res.status(201).json({ message: 'Chat created successfully', chat: newChat });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/chats/:userId',async (req,res)=>{
    const{userId, RecieverId} = req.params;
    try{
        const chats = await ChatModel.find({
            users: { $all: [userId, RecieverId] }
        });
        res.status(200).json({chats});
    }catch(error){
        console.log(error);
        res.status(500).json({message: 'Internal server error'});
    }
})