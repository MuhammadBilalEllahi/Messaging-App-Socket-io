import { Server } from "socket.io";
import http from 'http'
import express from "express"

const app = express()


app.options('*', cors(corsOptions));

const corsOptions = {
    origin: 'https://messaging-app-socket-io-frontend.vercel.app',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions))


const server = http.createServer(app)
const io = new Server(server, {
    // cors: {
    //     origin: ["http://localhost:3000"],
    //     methods: ["GET", "POST"]
    // }
    cors: {
        origin: ["https://messaging-app-socket-io.vercel.app", 'https://messaging-app-socket-io-frontend.vercel.app'],
        methods: ["GET", "POST"]
    }
})
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

