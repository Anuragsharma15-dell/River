import UserModel from '../models/UserModel.js';
import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();


router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const existingUser = await UserModel.findOne({email});
        if(existingUser){
            res.status(400).json({message: 'User already exists'});
            return;

        }
        const hashpassword = await bcrypt.hash(password, 10);
        const  newUser  = new UserModel({username, email, password: hashpassword});
        await newUser.save();
        res.status(201).json({message: 'User registered successfully'});
    }catch(error){
        console.log(error);
        res.status(500).json({message: 'Internal server error'});
    }

}
);

router.post('/login', async (req, res)=>{
    const {email, password}   = req.body;
    const User  = UserModel.findOne({email});
    if(!User){
        res.status(400).json({message: 'User not found'});
    }
    const Matchpassword = await bcrypt.compare(password, User.password);
    if(!Matchpassword){
        res.status(400).json({message: 'Invalid credentials'});
    }
    const token = jwt.sign({id: User._id},{jwt_secret:process.env.jwt_secret})},
    res.status(200).json({token, message: 'Login successful'}


));
