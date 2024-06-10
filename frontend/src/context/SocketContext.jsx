import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import { io } from "socket.io-client";

export const SocketContext = createContext();
export const useSocketContext = () => {
    return useContext(SocketContext)
}

// eslint-disable-next-line react/prop-types
export const SocketContextProvider = ({ children }) => {

    const [socket, setSocket] = useState(null)
    const [onlineUsers, setOnlineUsers] = useState([])
    const { authUser } = useAuthContext()

    console.log("here")

    useEffect(() => {
        console.log("here2")
        if (authUser) {
            const socket = io("https://messaging-app-socket-io.vercel.app", {
                query: {
                    userId: authUser._id
                }
            })

            console.log("Socket: ", socket)
            setSocket(socket)

            socket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users)
            })
            return () => socket.close()
        } else {
            if (socket) {
                console.log("Socket?: ", socket)
                socket.close()
                setSocket(null)
            }
        }

    }, [authUser])
    return (
        <SocketContext.Provider value={{ socket, onlineUsers }}>
            {children}
        </SocketContext.Provider>
    )
}