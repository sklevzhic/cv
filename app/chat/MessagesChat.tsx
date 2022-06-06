import React, {useEffect, useState} from 'react'
import {User} from "firebase/auth";
import {addDoc, collection, limit, orderBy, query} from 'firebase/firestore';
import {firestore} from "../../firebaseconfig";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {RiCloseFill} from "react-icons/ri"
import cn from "classnames"


interface MessagesChatProps {
    user: User | null | undefined,
    activeChat: string,
    handleActiveChat: (v: string) => void
}

export const MessagesChat: React.FC<MessagesChatProps> = ({user, activeChat, handleActiveChat}) => {

    const recipesCollectionRef = collection(firestore, `chats/${activeChat}/messages`)
    let [messages, loading, error, snapshot] = useCollectionData(query(recipesCollectionRef, orderBy("timestamp", "asc")))

    useEffect(() => {
        return () => handleActiveChat("")
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
    const handleTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value)
    }
    return <div className={"flex h-full flex-col"}>
        <div className={"flex basis-1/12 justify-between items-center border-b p-2"}>
            <div className="flex items-center space-x-4">
                <div className="space-y-0 font-medium">
                    <div>mail another</div>
                </div>
            </div>
            <button type="button" onClick={() => handleActiveChat("")}
                    className="p-2 hover:bg-lime-100 focus:bg-lime-100 rounded-full w-8 h-8 text-l">
                <RiCloseFill/>
            </button>
        </div>
        <div className={"p-2 basis-10/12"}>
            <div className={"flex flex-col"}>
                {
                    messages && messages.map(message => {
                        return <div key={message.timestamp}
                                    className={cn("flex p-0.5 ", user?.email === message.sender ? "justify-end" : "justify-start")}>
                            <div className={cn(" p-1 rounded-l max-w-[60%]",
                                user?.email === message.sender ? "bg-gray-200" : "bg-lime-200"
                            )}>{message.text}</div>
                        </div>
                    })
                }
            </div>
        </div>
        <div className={"flex basis-1/12 p-2"}>
            <input type="text" id="large-input" value={text} onChange={handleTextInput}
                   className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"/>
            <button onClick={sendMessage}>send</button>
        </div>
    </div>;
};