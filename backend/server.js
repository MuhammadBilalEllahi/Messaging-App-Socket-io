import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors"

import authRoutes from './routes/auth.routes.js';
import messagesRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';

import connectToMongoDB from "./db/connect.mongodb.js";
import { app, server } from "./socket/socket.js";

import path from 'path'

dotenv.config()
// const server = express();
const PORT = process.env.PORT || 9090;

const __dirname = path.resolve()

const corsOptions = {
    origin: ['https://messaging-f.bilalellahi.com'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
};
app.use(cors(corsOptions))


app.use(express.json())
app.use(cookieParser())
// app.options('*', cors(corsOptions));



app.get("/", async (req, res) => {
    res.send("OK")
})

app.use("/api/auth", authRoutes)
app.use("/api/messages", messagesRoutes)
app.use("/api/users", userRoutes)

// app.use(express.static(path.join(__dirname, "/frontend/dist/")))

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
// })

server.listen(PORT, () => {

    connectToMongoDB()
    console.log(`Listening on ${PORT}`)
})


