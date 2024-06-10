import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/AuthContext"

const useLogin = () => {
    const [loading, setLoading] = useState(false)
    const { setAuthUser } = useAuthContext()
    const login = async (
        username,
        password
    ) => {
        const success = handleInputErrors(username, password)
        if (!success) return;
        setLoading(true)
        try {



            const res = await fetch("https://messaging-app-socket-io.vercel.app/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
                },
                body: JSON.stringify({
                    username,
                    password
                })
            })

            const data = await res.json()

            // console.log(data)
            if (data.error) {
                throw new Error(data.error)
            }
            localStorage.setItem("chat-user", JSON.stringify(data))
            setAuthUser(data)
        } catch (error) {
            toast.error(error.message)
            // throw new Error(error)
        } finally {
            setLoading(false)
        }

    }
    return { loading, login }
}

export default useLogin




function handleInputErrors(
    username, password
) {

    if (!username || !password) {
        toast.error("Please fill all fields")
        return false
    }



    return true
}