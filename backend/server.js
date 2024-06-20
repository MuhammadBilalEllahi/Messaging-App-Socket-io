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


const allowedOrigins = ['https://messaging-app-socket-io-frontend.vercel.app', 'https://messaging-app-socket-io.vercel.app'];

const corsOptions = {
    origin: allowedOrigins,
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions))


app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/api/messages", messagesRoutes)
app.use("/api/users", userRoutes)

app.options('*', cors());

app.use(express.static(path.join(__dirname, "/frontend/dist/")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
})


server.listen(PORT, () => {

    connectToMongoDB()
    console.log(`Listening on ${PORT}`)
})


