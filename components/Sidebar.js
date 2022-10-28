import {
    HomeIcon,
    SearchIcon,
    LibraryIcon,
    PlusCircleIcon,
    HeartIcon,
    RssIcon,
    UserAddIcon,
    UserCircleIcon,
    LogoutIcon,
} from "@heroicons/react/outline";
import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/router";

const Sidebar = () => {
    const {data : session, status } =  useSession();
    const router = useRouter();

    const LogOut = () => {
        router.push('/login')
    }
    return (
    <div className="text-gray-500 p-5 border-r border-gray-900 overflow-y-scroll scrollbar-hide h-screen">
        <div className="space-y-4">
            <button className="flex items-center space-x-2 hover:text-white" onClick={() => LogOut()}>
                <LogoutIcon className="h-5 w-5"/>
                <p>Log Out</p>
            </button>
            <button className="flex items-center space-x-2 hover:text-white">
                <HomeIcon className="h-5 w-5"/>
                <p>Home</p>
            </button>
            <button className="flex items-center space-x-2 hover:text-white">
                <SearchIcon className="h-5 w-5"/>
                <p>Search</p>
            </button>
            <button className="flex items-center space-x-2 hover:text-white">
                <LibraryIcon className="h-5 w-5"/>
                <p>Your Library</p>
            </button>

            <hr className="border-t-[0.1px] border-gray-900"/>

            <button className="flex items-center space-x-2 hover:text-white">
                <PlusCircleIcon className="h-5 w-5"/>
                <p>Create Playlist</p>
            </button>
            <button className="flex items-center space-x-2 hover:text-white">
                {/* <HeartIcon className="h-5 w-5"/> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                <p>Liked Songs</p>
            </button>
            <button className="flex items-center space-x-2 hover:text-white">
                <RssIcon className="h-5 w-5"/>
                <p>Your episodes</p>
            </button>

            <hr className="border-t-[0.1px] border-gray-900"/>

            <p className="hover:text-white cursor-pointer">
                Playlist name...
            </p>
             <p className="hover:text-white cursor-pointer">
                Playlist name...
            </p>
             <p className="hover:text-white cursor-pointer">
                Playlist name...
            </p>
             <p className="hover:text-white cursor-pointer">
                Playlist name...
            </p>
             <p className="hover:text-white cursor-pointer">
                Playlist name...
            </p>
             <p className="hover:text-white cursor-pointer">
                Playlist name...
            </p>
             <p className="hover:text-white cursor-pointer">
                Playlist name...
            </p>
             <p className="hover:text-white cursor-pointer">
                Playlist name...
            </p>
            

        </div>
    </div>
  )
}

export default Sidebar