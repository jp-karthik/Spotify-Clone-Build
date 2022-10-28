import {getProviders, signIn} from "next-auth/react";

const Login = ({ providers }) => {
    return (
        <div className="flex flex-col justify-center items-center
         bg-black min-h-screen w-full">
            <img className="w-56 mb-5" src="https://i.imgur.com/fPuEa9V.png" alt="Spotify Logo" />
            
            {Object.values(providers).map((provider) => {
                return (
                <div key={provider.name}>
                    <button className="bg-green-500 text-gray-200 p-5 rounded-full font-semibold hover:opacity-90 hover:text-white"
                    onClick={() => signIn(provider.id, {callbackUrl : "/"})}>
                    Login with {provider.name}
                    </button>  
                </div>
                )  
            })}
        
        </div>
    )
}

export default Login;

export async function getServerSideProps() {
    const providers = await getProviders();
    return {
        props : {
            providers
        }
    };
}