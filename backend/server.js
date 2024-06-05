import express from "express";
import dotenv from "dotenv"

import authRoutes from './routes/auth.routes.js'
import connectToMongoDB from "./db/connect.mongodb.js";

dotenv.config()
const server = express();
const PORT = process.env.PORT || 9090;



server.use(express.json())

server.use("/api/auth", authRoutes)


server.get("/", async (req,res)=>{
    console.log("Hi")
    res.send("OK")
})





server.listen(PORT, ()=>{
    connectToMongoDB()
    console.log(`Listening on ${PORT}`)
})
