import express from "express";
import dotenv from "dotenv"

import authRoutes from './routes/auth.routes.js';
import messagesRoutes from './routes/message.routes.js';

import connectToMongoDB from "./db/connect.mongodb.js";
import cookieParser from "cookie-parser";


dotenv.config()
const server = express();
const PORT = process.env.PORT || 9090;



server.use(express.json())
server.use(cookieParser)

server.use("/api/auth", authRoutes)
server.use("/api/messages", messagesRoutes)


server.get("/", async (req,res)=>{
    console.log("Hi")
    res.send("OK")
})





server.listen(PORT, ()=>{
    connectToMongoDB()
    console.log(`Listening on ${PORT}`)
})
