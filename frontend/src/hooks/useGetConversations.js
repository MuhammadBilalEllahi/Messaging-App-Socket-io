
import toast from 'react-hot-toast';
import { useState, useEffect } from 'react';

const useGetConversations = () => {

    const [loading, setLoading] = useState(false)
    const [conversations, setConversations] = useState([])

    useEffect(() => {
        const getConversations = async () => {

            setLoading(true)

            try {
                const res = await fetch("https://messaging-app-socket-io.vercel.app/api/users/", {
                    method: "GET",
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
                    }
                })
                const data = await res.json()

                if (data.error) {
                    throw new Error(data.error)
                }
                setConversations(data)
            } catch (error) {
                toast.error(error.message)
            } finally {
                setLoading(false)
            }
        };
        getConversations()
    }, [])

    return { loading, conversations }


}

export default useGetConversations;