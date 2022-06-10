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
import {NewMessage} from "./NewMessage";
import {MessagesListChat} from "./MessagesListChat";


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
                { loading ? <>Загрузка</> : <MessagesListChat messages={messages} user={user}/> }
            </div>
        </div>
        <div className={"flex  shrink-0 basis-1/12 bg-gray-50 border-t p-2"}>
            <NewMessage user={user} activeChatId={activeChat.id}/>
        </div>
    </div>;
};