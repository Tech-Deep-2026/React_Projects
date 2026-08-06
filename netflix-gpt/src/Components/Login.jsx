import Header from "./Header";
import { useState } from "react";
const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const signupOnclick = () => {
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div className="absolute inset-0">
            <Header />
            <div className="absolute inset-0 bg-black/60 z-0">
                <img
                    className="w-full h-full object-cover"
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/0ce6c17e-e188-4f13-aaf2-6366e12ba739/web/IN-en-20260803-TRIFECTA-perspective_7730cca2-6324-4104-bf66-1a1f6e1a3e61_large.jpg" alt="Background Login"
                />
            </div>
            <form className="w-3/12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black p-8 rounded-lg bg-opacity-80">
                <h1 className="text-3xl font-bold mb-4 text-white ">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>

                {!isSignInForm && (
                    <input
                        className="w-full p-2 my-4 bg-gray-800 text-white placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                        placeholder="Full Name"
                    >
                    </input>
                )}
                <input
                    className="w-full p-2 my-4 bg-gray-800 text-white placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="email"
                    placeholder="Email"
                />
                <input
                    className="w-full p-2 my-4 bg-gray-800 text-white placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="password"
                    placeholder="Password"
                />
                <button
                    className="w-full p-2 my-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
                >
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>

                <p className="text-gray-500 mt-4">
                    {isSignInForm ? "New to Netflix?" : "Already have an account?"}
                    <span
                        className="text-white cursor-pointer"
                        onClick={() => { signupOnclick() }}
                    > {isSignInForm ? "Sign up now." : "Sign in."}</span>
                </p>
            </form>
        </div>
    )
}

export default Login;