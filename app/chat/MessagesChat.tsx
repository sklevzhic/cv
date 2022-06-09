import React, {useEffect, useRef, useState} from 'react'
import {User} from "firebase/auth";
import {addDoc, collection, limit, orderBy, query} from 'firebase/firestore';
import {firestore} from "../../firebaseconfig";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {RiCloseFill} from "react-icons/ri"
import {MdSend} from "react-icons/md"
import cn from "classnames"
import { IChat } from '../models/IChat';
import { getTime } from '../utils/getTime';


interface MessagesChatProps {
    user: User | null | undefined,
    activeChat: IChat,
    handleActiveChat: (v: IChat | null) => void
}

export const MessagesChat: React.FC<MessagesChatProps> = ({user, activeChat, handleActiveChat}) => {
    let ref = useRef<HTMLDivElement | null>(null)
    const recipesCollectionRef = collection(firestore, `chats/${activeChat.id}/messages`)
    let [messages, loading, error] = useCollectionData(query(recipesCollectionRef, orderBy("timestamp", "asc")))
    useEffect(() => {
        return () => handleActiveChat(null)
    }, [])

    useEffect(() => {
        ref.current?.scrollTo({
            top: ref.current?.scrollHeight,
            behavior: 'smooth'
        })
    }, [messages])


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
                    cn("triangleMessage", user?.email === message.sender ? "triangleMessageSender -right-[6px]" : " -left-[6px]")
                }></span>
        }

        return message && <div key={message.timestamp}
                    className={cn("flex px-12 m-0.5", user?.email === message.sender ? "justify-end" : " ")}>
            <div className={cn("flex relative p-1 rounded max-w-[60%] pr-10 pb-2",
                user?.email === message.sender ? "bg-gray-100" : "bg-lime-100")}>
                <div>{message.text}
                    <span className={cn("absolute bottom-1 right-1 text-gray-400 text-xs")}>{getTime(message.timestamp)}</span>
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
        <div className={"flex basis-1/12 shrink-0 justify-between bg-gray-50 items-center border-b p-2"}>
            <div className="flex items-center space-x-4">
                <div className="space-y-0 font-medium">
                    <div>{activeChat.title}</div>
                </div>
            </div>
            <button type="button" onClick={() => handleActiveChat(null)}
                    className="p-2 hover:bg-red-500 focus:bg-red-500 rounded-full w-8 h-8 text-l">
                <RiCloseFill/>
            </button>
        </div>
        <div className={"p-2 flex flex-col justify-end shrink-0 basis-10/12 overflow-hidden"} >
            <div className={"flex flex-col h-full  overflow-auto "} ref={ref}>
                { messagesItems }
            </div>
        </div>
        <div className={"flex  shrink-0 basis-1/12 bg-gray-50 border-t p-2"}>
            <input type="text" id="large-input" value={text} onChange={handleTextInput}
                   className="block w-full text-gray-900 border border-gray-300 p-1  rounded-lg bg-white sm:text-md focus:ring-blue-500 focus:border-blue-500"/>

            <button disabled={(!text) && true } className={"bg-lime-300 p-2 rounded-full"} onClick={sendMessage}><MdSend /></button>
        </div>
    </div>;
};