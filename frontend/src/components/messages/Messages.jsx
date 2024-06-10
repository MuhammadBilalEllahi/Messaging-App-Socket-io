import useGetMessages from "../../hooks/useGetMessages";
import Message from "./Message.jsx";
import MessageSkeleton from "../../skeletons/MessageSkeleton.jsx";

export default function Messages() {
    const { loading, messages } = useGetMessages()
    console.log("M here: ", messages)
    return (
        <div className="px-4 flex-1 overflow-auto">

            {!loading && messages.length > 0 &&
                messages.map((message) => {
                    return <Message key={message._id} message={message} />
                })
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
