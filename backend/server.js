import express from "express";
import dotenv from "dotenv";


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

// const allowedOrigins = [, 'https://messaging-app-socket-io.vercel.app'];




// app.options('*', (req, res) => {
//     res.header('Access-Control-Allow-Origin', 'https://messaging-app-socket-io-frontend.vercel.app');
//     res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     res.header('Access-Control-Allow-Credentials', 'true');
//     res.sendStatus(200);
// });


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


