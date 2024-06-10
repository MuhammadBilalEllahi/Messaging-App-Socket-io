/* eslint-disable react/prop-types */

import useConversation from "../../zustand/useConversation"
import { useAuthContext } from "../../context/AuthContext"
import { extractTimeFormat } from "../../utils/extractTimeFormat"


const Message = ({ message }) => {

    const { authUser } = useAuthContext()
    const { selectedConversation } = useConversation()

    const fromMe = message.senderId === authUser._id;
    console.log("auth ", authUser._id, "sender id", message.senderId, authUser._id === message.senderId, "receiver id", message.receiverId)
    const chatClassName = fromMe ? 'chat-end' : 'chat-start';
    const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic
    const bubbleBgColor = fromMe ? 'bg-blue-500' : "";
    const formattedTime = extractTimeFormat(message.createdAt)


    return (
        <div>
            <div className={`chat ${chatClassName}`}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS chat bubble component" src={profilePic} />
                    </div>
                </div>

                <div className={`chat-bubble ${bubbleBgColor}`}>{message.message}</div>
                <div className="chat-footer opacity-50">
                    Delivered
                    <time className="mx-2 text-xs opacity-50">{formattedTime}</time>

                </div>
            </div>


        </div>
    )
}


export default Message


// Reusable Snippet

// export default function Message() {
//     return (
//         <div>
//             <div className="chat chat-start">
//                 <div className="chat-image avatar">
//                     <div className="w-10 rounded-full">
//                         <img alt="Tailwind CSS chat bubble component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
//                     </div>
//                 </div>

//                 <div className="chat-bubble">You were the Chosen One!</div>
//                 <div className="chat-footer opacity-50">
//                     Delivered
//                     <time className="mx-2 text-xs opacity-50">12:45</time>

//                 </div>
//             </div>
//             <div className="chat chat-end">
//                 <div className="chat-image avatar">
//                     <div className="w-10 rounded-full">
//                         <img alt="Tailwind CSS chat bubble component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
//                     </div>
//                 </div>

//                 <div className="chat-bubble">I hate you!</div>
//                 <div className="chat-footer opacity-50">
//                     Seen at 12:46
//                 </div>
//             </div>

//         </div>
//     )
// }
