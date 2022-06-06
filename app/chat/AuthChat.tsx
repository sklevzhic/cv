import React, {useState} from 'react'
import {LoginChat} from "./LoginChat";
import {RegisterChat} from "./RegisterChat";

interface AuthChatProps {

}

export const AuthChat: React.FC<AuthChatProps> = () => {

    let [isRegister, setIsRegister] = useState<boolean>(false)


    return (
        <div className={" min-w-[200px] w-full md:w-[500px] sm:w-[400px] mx-auto flex flex-col border rounded-l mt-4 p-10 bg-gray-100"}>
            {
                isRegister
                    ? <RegisterChat />
                    : <LoginChat />
            }
        </div>
    )
};