/* eslint-disable react/prop-types */

import useConversation from "../../zustand/useConversation"

export default function Conversation({ conversation, lastIdx, emoji }) {
    const { selectedConversation, setSelectedConversation } = useConversation()

    const isSelected = selectedConversation?._id === conversation._id

    return (
        <>
            <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
                ${isSelected ? "bg-sky-500" : ""}
            `}
                onClick={() => setSelectedConversation(conversation)}
            >
                <div className="avatar online">
                    <div className="w-12 rounded-full">
                        <img src={conversation.profilePic} alt="user avatar" />
                    </div>
                </div>



                <div className="flex flex-col flex-1">
                    <div className="flex gap-1 justify-between">
                        <p className="font-bold text-gray-200">{conversation.fullName}</p>
                        <span className="text-xl">{emoji}</span>
                    </div>
                </div>
            </div >


            {!lastIdx && <div className="divider my-0 py-0 h-1"></div>
            }
        </>
    )
}







// Starter code
// export default function Conversation() {
//     return (
//         <>
//             <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
//                 <div className="avatar online">
//                     <div className="w-12 rounded-full">
//                         <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="user avatar" />
//                     </div>
//                 </div>



//                 <div className="flex flex-col flex-1">
//                     <div className="flex gap-1 justify-between">
//                         <p className="font-bold text-gray-200">John</p>
//                         <span className="text-xl">😦</span>
//                     </div>
//                 </div>
//             </div>


//             <div className="divider my-0 py-0 h-1"></div>
//         </>
//     )
// }
