import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import dotenv from 'dotenv';
dotenv.config();

export async function protectRoute(req, res, next) {

    try {
        
        const token = req.cookies.jwt;

        if(!token){
            return res.status(401).json({message: "Unauthorized - No token provided"});
        }

        const decode = jwt.verify(token, process.env.JWT_SECRET);

        if(!decode){
            return res.status(401).json({message: "Unauthorized - Invalid token"});
        }
        
        const user = await User.findById(decode.userId).select("-password");

        if(!user){
            return res.status(401).json({message: "Unauthorized - User not found"});
        }

        req.user = user;

        next();
    } catch (error) {
        console.error("Error in onboarding:", error);
        res.status(500).json({message: "Server error"});
    }
}