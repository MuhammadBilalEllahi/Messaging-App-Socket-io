import Messages from "./Messages";
import MessagesInput from "./MessagesInput";
import { TiMessages } from 'react-icons/ti'
import useConversation from "../../zustand/useConversation";
import { useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";

export default function MessageContainer() {
    // eslint-disable-next-line no-unused-vars
    // const [noChatSelected, setNoChatSelected] = useState(true);


    const { selectedConversation, setSelectedConversation } = useConversation()

    useEffect(() => {
        return () => setSelectedConversation(null)
    }, [setSelectedConversation])
    return (
        <div className="md:min-w-[450px] flex flex-col" >
            {(!selectedConversation) ? <NoChatSelected /> :
                (<>
                    <div className="bg-slate-500 px-4 py-2 mb-2">
                        <span className="label-text ">
                            To:
                        </span>

                        <span className="text-gray-900 font-bold  mx-2">
                            {selectedConversation.fullName}
                        </span>
                    </div>

                    <Messages />
                    <MessagesInput />
                </>)}
        </div>
    )
}

const NoChatSelected = () => {
    const { authUser } = useAuthContext()
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-lg ms:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
                <p>Welcome 👋 {authUser.fullName} </p>
                <p>Select Chat to Start Messaging</p>
                <TiMessages className="text-3xl ms:text-6xl text-center" />
            </div>
        </div>
    )
}