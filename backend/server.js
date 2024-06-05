import express from "express";
import dotenv from "dotenv"

import authRoutes from './routes/auth.routes.js'
import connectToMongoDB from "./db/connect.mongodb.js";

const server = express();
dotenv.config()



const PORT = process.env.PORT || 9090;




server.get("/", async (req,res)=>{
    console.log("Hi")
    res.send("OK")
})

server.use("/api/auth", authRoutes)



server.listen(PORT, ()=>{
    connectToMongoDB()
    console.log(`Listening on ${PORT}`)
})
