import mongoose from 'mongoose';

const UserModel = new mongoose.model({
    username:{
        type:String ,
        required:true
    },
    email:{
        type:String ,
        required:true
    },
    password:{
        type:String,
        required :true
    }
},{timestamps :true });


const User = module.exports('User', UserModel);
