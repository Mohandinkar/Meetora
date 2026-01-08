import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import authRoutes from './routes/auth.route.js';
import userRoutes from './routes/user.route.js';
import chatRoutes from './routes/chat.route.js';
import {connectDB} from './lib/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';

const app = express();
const port = process.env.PORT;

const __dirname = path.resolve();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}))

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/chat",chatRoutes);

//serve static files in production
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
    // for any route other than the API routes, serve index.html 
    app.get("*", (req,res)=>{
        res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
    })
}

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
    connectDB();
})