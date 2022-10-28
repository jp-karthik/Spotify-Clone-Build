import { ChevronDownIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const colors = [
    "from-indigo-500",
    "from-blue-500",
    "from-green-500",
    "from-red-500",
    "from-yellow-500",
    "from-pink-500",
    "from-purple-500"
]

const Center = () => {
        
    const [color, setColor] = useState(colors[0]);
        
    useEffect(() => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setColor(randomColor);
    }, [])

    const {data : session} = useSession();
    return (
        <div className="flex-grow text-white">
            
            <header className="absolute top-3 right-6">
                <div className="flex items-center bg-black space-x-2 opacity-90 hover:opacity-100 cursor-pointer rounded-full p-0.5 pr-2 text-gray-400 hover:text-white">
                    <img 
                        className="rounded-full w-9 h-9"
                        src={session?.user.image} 
                        alt="user profile picture" 
                    />
                    <h2 className="">{session?.user.name}</h2>
                    <ChevronDownIcon className="h-4 w-4" />
                </div>
            </header>


            <section 
            className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80`}>
                <h1>Hello</h1>
            </section>
        
        </div>
    )
}

export default Center;