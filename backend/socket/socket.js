import { Server } from "socket.io";
import http from 'http'
import express from "express"
import cors from "cors"

const app = express()

const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: "https://messaging-app-socket-io-frontend.vercel.app",
        methods: ["GET", "POST", "HEAD", "PUT", "PATCH", "DELETE"],
    },
});
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

