import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from './routes/auth.routes.js';
import messagesRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';

import connectToMongoDB from "./db/connect.mongodb.js";



dotenv.config()
const server = express();
const PORT = process.env.PORT || 9090;



server.use(express.json())
server.use(cookieParser())

server.use("/api/auth", authRoutes)
server.use("/api/messages", messagesRoutes)
server.use("/api/users", userRoutes)


server.get("/", async (req,res)=>{
    console.log("Hi")
    res.send("OK")
})





server.listen(PORT, ()=>{
    connectToMongoDB()
    console.log(`Listening on ${PORT}`)
})
