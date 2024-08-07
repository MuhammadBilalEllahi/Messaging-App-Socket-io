import { Server } from "socket.io";
import http from 'http'
import express from "express"
// import cors from "cors"

const app = express()
// app.use(cors());
// const corsOptions = {
//     origin: 'https://messaging-f.bilalellahi.com',
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true
// };

// app.use(cors(corsOptions));
// app.options('*', cors(corsOptions));

const server = http.createServer(app)
const io = new Server(server);
export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId]
}
const userSocketMap = {}

io.on("connection", (socket) => {
    console.log("A user Connected", socket.id)

    const userId = socket.handshake.query.userId
    if (userId !== "undefined") userSocketMap[userId] = socket.id
    io.emit("getOnlineUsers", Object.keys(userSocketMap))

    socket.on("disconnect", () => {
        console.log("User Disconnected", socket.id)
        delete userSocketMap[userId]
        io.emit("getOnlineUsers", Object.keys(userSocketMap))
    })
})


export { app, io, server }

