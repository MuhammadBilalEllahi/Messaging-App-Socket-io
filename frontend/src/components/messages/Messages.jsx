import useGetMessages from "../../hooks/useGetMessages";
import Message from "./Message.jsx";
import MessageSkeleton from "../../skeletons/MessageSkeleton.jsx";
import { useEffect, useRef } from "react";
import useListenMessages from "../../hooks/useListenMessages.js";

export default function Messages() {
    const { loading, messages } = useGetMessages()
    useListenMessages()
    const lastMessageRef = useRef()

    useEffect(() => {
        // lastMessageRef.current?.scrollIntoView({ behavior: "smooth" })
        setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({ behavior: "smooth" })
        }, 100)
    }, [messages])
    return (
        <div className="px-4 flex-1 overflow-auto">

            {!loading && messages.length > 0 &&
                messages.map((message) => (
                    <div key={message._id}
                        ref={lastMessageRef}>
                        <Message message={message} />
                    </div>
                ))
            }

            {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

            {!loading && messages.length === 0 && (
                <p className="text-center ">Send a message to start a conversation</p>
            )}


        </div>
    )
}






// REusable Snippet 
// export default function Messages() {
//     return (
//         <div className="px-4 flex-1 overflow-auto">
//             <Message />
//             <Message />

//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />

//         </div>
//     )
// }
