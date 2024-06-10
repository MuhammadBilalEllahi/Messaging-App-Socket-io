
import { useState } from 'react'
import { BsSend } from 'react-icons/bs'
import useSendMessage from '../../hooks/useSendMessage'
export default function MessagesInput() {
    const [message, setMessage] = useState("")
    const { loading, sendMessage } = useSendMessage()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!message) return;

        await sendMessage(message)
        setMessage("")
    }
    return (
        <form onSubmit={handleSubmit} className="px-4 my-3">
            <div className="w-full relative">
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xl"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                <button type="submit" className='absolute inset-y-0 end-0 flex items-center pe-3'>
                    {loading ? <span className='loading loading-spinner'></span> : <BsSend />}
                </button>
            </div>
        </form>
    )
}



// REUSABLE SNIPPET
// import { BsSend } from 'react-icons/bs'
// export default function MessagesInput() {
//     return (
//         <form className="px-4 my-3">
//             <div className="w-full relative">
//                 <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xl" />

//                 <button type="submit" className='absolute inset-y-0 end-0 flex items-center pe-3'>
//                     <BsSend />
//                 </button>
//             </div>
//         </form>
//     )
// }
