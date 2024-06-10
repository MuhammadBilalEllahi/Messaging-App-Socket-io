

import { useState } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import useConversation from '../../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversations';
import toast from 'react-hot-toast';

export default function SearchInput() {
    const [search, setSearch] = useState('')
    const { setSelectedConversation } = useConversation()
    const { conversations } = useGetConversations()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!search) return

        const conversation = conversations.find((e) => e.fullName.toLowerCase().includes(search.toLowerCase()))

        if (conversation) {
            setSelectedConversation(conversation)
            setSearch('')
        } else {
            toast.error("No Such User Found")
        }
    }
    return (
        <form onSubmit={handleSubmit} className="flex gap-2">
            <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

            <button className="btn btn-circle btn-outline">
                <IoSearchSharp className="w-6 h-6 outline-none" />
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg> */}
            </button>
        </form>
    )
}







// STARTER CODE
// import { IoSearchSharp } from 'react-icons/io5';

// export default function SearchInput() {
//     return (
//         <form className="flex gap-2">
//             <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

//             <button className="btn btn-circle btn-outline">
//                 <IoSearchSharp className="w-6 h-6 outline-none" />
//                 {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg> */}
//             </button>
//         </form>
//     )
// }
