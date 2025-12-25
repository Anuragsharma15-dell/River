import mongoose from 'mongoose';

const VideoGeneration  = new mongoose.Schema({
    video:{
       type:String,
       required:true
    },
    
})