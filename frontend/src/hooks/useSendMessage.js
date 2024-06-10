
import { useState } from 'react'
import useConversation from '../zustand/useConversation.js'
import toast from 'react-hot-toast';


const useSendMessage = () => {

    const [loading, setLoading] = useState(false)

    const { messages, setMessages, selectedConversation } = useConversation()

    const sendMessage = async (message) => {
        console.log("selected")
        setLoading(true)
        try {
            const res = await fetch(`https://messaging-app-socket-io.vercel.app/api/messages/send/${selectedConversation._id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
                },
                body: JSON.stringify({
                    message
                })
            })

            const data = await res.json()

            if (data.error) {
                throw new Error(data.error)
            }

            setMessages([...messages, data])
        } catch (error) {
            toast.error(error.message)
        }
        finally {
            setLoading(false)
        }
    }

    return { sendMessage, loading }
}

export default useSendMessage
