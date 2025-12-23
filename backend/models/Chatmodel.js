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
   senderId:{
    type:Schema.Types.ObjectId,
    ref:'UserModel',
    required:true
   },
   RecieverId:{
    type:Schema.Types.ObjectId,
    ref:'UserModel',
    required:true
   }

});