import React, { useState } from 'react'
import {useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile} from 'react-firebase-hooks/auth';
import { auth } from '../../firebaseconfig';
import cn from "classnames";

interface RegisterChatProps {
}

export const RegisterChat: React.FC<RegisterChatProps> = () => {
    console.log("RegisterChat");
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [ createUserWithEmailAndPassword, user, loading, error, ] = useCreateUserWithEmailAndPassword(auth);
    let [userName, setUserName] = useState<string>("")
    let [password, setPassword] = useState<string>("")

    const login = () => signInWithGoogle()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        createUserWithEmailAndPassword(userName, password)
        setUserName("")
        setPassword("")
    }

    return <>
        <h1 className={"text-3xl text-center mb-4"} >Register</h1>
        <form className={"w-full"} onSubmit={handleSubmit}>
            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your
                    email</label>
                <input type="email" id="email" value={userName} onChange={(e) => setUserName(e.target.value)}
                       className={cn("border text-gray-900 text-sm rounded-lg " +
                           "focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
                           error ? "border-red-300" : "border-gray-300"
                       )}
                       placeholder="user@gmail.com" required />
            </div>

            <div className="mb-6">
                <label htmlFor="password"
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your
                    password</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}
                       className={cn("border text-gray-900 text-sm rounded-lg " +
                           "focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
                           error ? "border-red-300" : "border-gray-300"
                       )}
                       required />
            </div>

            <div className={"text-center"}>
                <button type="submit"
                        className="text-white text-center bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">{!loading ? "Submit" : "Loading" }
                </button>
            </div>
            {error && <div className={"text-red-600"}> {error.message} </div>}
        </form>
        <div className={"text-center "}>
            <p className={"text-sm my-4"}>Or Sign Up Using</p>
            <button type="button" onClick={login}
                    className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4
                        focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center
                        inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800">

                <svg className="w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fab"
                     data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                    <path fill="currentColor"
                          d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                </svg>
            </button>
        </div>
    </>
};