import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";

import RingTone from '../assets/sounds/ios_ringtone.mp3'

const useListenMessages = () => {

    const { socket } = useSocketContext()
    const { messages, setMessages } = useConversation()


    useEffect(
        () => {
            socket?.on("newMessage", (newMessage) => {
                newMessage.shouldShake = true
                const sound = new Audio(RingTone)
                sound.play()
                setMessages([...messages, newMessage])
            })

            return () => { socket?.off("newMessage") }
        }, [socket, setMessages, messages])
}
export default useListenMessages