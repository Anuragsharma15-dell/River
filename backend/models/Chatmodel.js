import mongoose from 'mongoose';

const ChatModel = new mongoose.model('chats',{
    users:{
        type:Schema.Types.ObjectId,
         ref:'UserModel',
        required:true
    },
    messages:{
        type:Array,
        default:[]
    },
    aichat:{
        type:String,
        required:true
    },
    socket:{
        
    }

});