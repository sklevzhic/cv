import React, {useEffect, useState} from 'react'
import {User} from "firebase/auth";
import {addDoc, collection, limit, orderBy, query} from 'firebase/firestore';
import {firestore} from "../../firebaseconfig";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {RiCloseFill} from "react-icons/ri"
import cn from "classnames"
import { IChat } from '../models/IChat';


interface MessagesChatProps {
    user: User | null | undefined,
    activeChat: IChat,
    handleActiveChat: (v: IChat | null) => void
}

export const MessagesChat: React.FC<MessagesChatProps> = ({user, activeChat, handleActiveChat}) => {

    const recipesCollectionRef = collection(firestore, `chats/${activeChat.id}/messages`)
    let [messages, loading, error] = useCollectionData(query(recipesCollectionRef, orderBy("timestamp", "asc")))
    useEffect(() => {
        return () => handleActiveChat(null)
    }, [])

    const [text, setText] = useState<string>("")
    const sendMessage = async () => {
        let data = {
            displayName: user?.displayName,
            photoUrl: user?.photoURL,
            timestamp: Date.now(),
            sender: user?.email,
            text,
        }
        addDoc(recipesCollectionRef, data)
        setText("")
    }




    const messagesItems = messages?.map((message,i) => {

        function getImage(src: string) {
            return <img className={cn("absolute bottom-0 h-8 w-aut rounded-full cursor-pointer", user?.email === message.sender ? "-right-[2.7rem]" : "-left-[2.7rem]")}
                        src={src} alt="" />
        }
        function getTriangle() {
            return <span
                className={
                    cn("triangleMessage", user?.email === message.sender ? "triangleMessageSender -right-[8px]" : " -left-[8px]")
                }></span>
        }

        return message && <div key={message.timestamp}
                    className={cn("flex px-12 rounded-l", user?.email === message.sender ? "justify-end" : " ")}>
            <div className={cn("flex relative p-1 max-w-[60%] pr-10 pb-2",
                user?.email === message.sender ? "bg-gray-200" : "bg-lime-200")}>
                <div>{message.text}
                    <span className={cn("absolute bottom-0 right-0 text-xs")}>15:15</span>
                    { messages &&  (i === messages.length - 1) ? getTriangle() : messages && (messages[i].sender === messages[i+1].sender) ? null : getTriangle()}
                </div>

                { messages &&  (i === messages.length - 1) ? getImage(message?.photoUrl) : messages && (messages[i].sender === messages[i+1].sender) ? null : getImage(message?.photoUrl)}

            </div>

        </div>
    })

    const handleTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value)
    }
    return <div className={"flex h-full flex-col"}>
        <div className={"flex basis-1/12 shrink-0 justify-between items-center border-b p-2"}>
            <div className="flex items-center space-x-4">
                <div className="space-y-0 font-medium">
                    <div>{activeChat.title}</div>
                </div>
            </div>
            <button type="button" onClick={() => handleActiveChat(null)}
                    className="p-2 hover:bg-lime-100 focus:bg-lime-100 rounded-full w-8 h-8 text-l">
                <RiCloseFill/>
            </button>
        </div>
        <div className={"p-2 flex flex-col justify-end shrink-0 basis-10/12 overflow-hidden"}>
            <div className={"flex flex-col h-full  overflow-auto"}>
                { messagesItems }
            </div>
        </div>
        <div className={"flex  shrink-0 basis-1/12 border-t p-2"}>
            <input type="text" id="large-input" value={text} onChange={handleTextInput}
                   className="block w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"/>
            <button onClick={sendMessage}>send</button>
        </div>
    </div>;
};