
import { BiLogOut } from 'react-icons/bi'
import useLogout from '../../hooks/useLogout'
export default function LogoutButton() {
    const { loading, logout } = useLogout()
    return (
        <div className='mt-auto'>
            {!loading ? <BiLogOut onClick={logout} className="w-5 h-5 text-white cursor-pointer" /> :

                <span className='loading loading-spinner '></span>}

        </div>
    )
}
