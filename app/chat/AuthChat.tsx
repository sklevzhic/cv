import React, {useState} from 'react'
import {LoginChat} from "./LoginChat";
import {RegisterChat} from "./RegisterChat";

interface AuthChatProps {

}

export const AuthChat: React.FC<AuthChatProps> = () => {
    console.log("AuthChat");
    let [isRegister, setIsRegister] = useState<boolean>(false)

    return (
        <div className={" min-w-[200px] relative w-full md:w-[500px] sm:w-[400px] mx-auto flex flex-col border rounded-l mt-4 p-10 bg-gray-100"}>
            <div className={"flex absolute top-0 left-[200px]"}>
                <button className={"border"} onClick={() => setIsRegister(false)}>login</button>
                <button className={"border"} onClick={() => setIsRegister(true)}>register</button>
            </div>
            {
                isRegister
                    ? <RegisterChat/>
                    : <LoginChat/>
            }
        </div>
    )
};