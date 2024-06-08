
import { BsSend } from 'react-icons/bs'
export default function MessagesInput() {
    return (
        <form className="px-4 my-3">
            <div className="w-full relative">
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xl" />

                <button type="submit" className='absolute inset-y-0 end-0 flex items-center pe-3'>
                    <BsSend />
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
