import React, {useEffect, useState} from 'react'
import {setActiveChatId} from "../../store/slices/auth/authSlice";
import {useDispatch} from "react-redux";
import {RiCloseFill} from "react-icons/ri"
import {useRouter} from "next/router";
interface MessagesChatProps {

}

export const MessagesChat: React.FC<MessagesChatProps> = () => {
    const dispatch = useDispatch()

    const [text, setText] = useState<string>("")
    const sendMessage = () => {
        setText("")
    }

    return <div>
        <div className={"flex justify-between items-center border-b p-2"}>
            <div className="flex items-center space-x-4">
                <img className="w-12 h-12 rounded-full"
                     src="http://localhost:3000/_next/static/media/klevzhits.29d406a8.jpg" alt=""/>
                <div className="space-y-0 font-medium">
                    <div>Jese Leos</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
                </div>
            </div>
            <button type="button" onClick={() => dispatch(setActiveChatId(""))}
                    className="p-2 hover:bg-lime-100 focus:bg-lime-100 rounded-full w-8 h-8 text-l">
                <RiCloseFill/>
            </button>
        </div>
        <div className={"p-2"}>
            <div className={"flex flex-col"}>
                <div className={"flex justify-end"}>
                    <span className={"bg-lime-200 p-1"}>Привет <button>:</button></span>
                </div>
                <div className={"flex justify-start"}>
                    <span className={"bg-lime-200 p-1"}>Привет <button>:</button></span>
                </div>
                <div className={"flex justify-end"}>
                    <span className={"bg-lime-200 p-1"}>Как дела <button>:</button></span>
                </div>
                <div className={"flex justify-start"}>
                    <span className={"bg-lime-200 p-1"}>Хорошо, ты как <button>:</button></span>
                </div>
                <div className={"flex justify-end"}>
                    <span className={"bg-lime-200 p-1"}>Отлично <button>:</button></span>
                </div>
                <div className={"flex justify-start"}>
                    <span className={"bg-lime-200 p-1"}>Лайк. <button>:</button></span>
                </div>
            </div>
        </div>
        <div className={"flex"}>
            <input type="text" id="large-input" value={text} onChange={(e) => setText(e.currentTarget.value)}
                   className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"/>
            <button onClick={sendMessage}>send</button>
        </div>
    </div>;
};