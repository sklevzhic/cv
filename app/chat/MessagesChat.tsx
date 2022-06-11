import React, {memo, useEffect, useLayoutEffect, useRef} from 'react'
import {User} from "firebase/auth";
import {collection, orderBy, query} from 'firebase/firestore';
import {firestore} from "../../firebaseconfig";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {RiCloseFill} from "react-icons/ri"
import { IChat } from '../models/IChat';
import {MemoNewMessage} from "./NewMessage";
import {MemoMessagesListChat} from "./MessagesListChat";
import useStayScrolled from 'react-stay-scrolled';
import {IMessage} from "../models/IMessage";


interface MessagesChatProps {
    user: User | null | undefined,
    activeChat: IChat,
    handleActiveChat: (v: IChat | null) => void
}

const MessagesChat: React.FC<MessagesChatProps> = ({user, activeChat, handleActiveChat}) => {
    console.log("MessagesChat");
    const recipesCollectionRef = collection(firestore, `chats/${activeChat.id}/messages`)
    let [messages, loading, error] = useCollectionData(query(recipesCollectionRef, orderBy("timestamp", "asc")))
    useEffect(() => {
        return () => handleActiveChat(null)
    }, [])
    const listRef = useRef<HTMLDivElement>(null);
    const { stayScrolled } = useStayScrolled(listRef);
    useLayoutEffect(() => {
        stayScrolled();
    }, [messages?.length])

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
            <div className={"flex flex-col h-full overflow-auto"} ref={listRef}>
                { loading
                    ? <>Загрузка</>
                    : messages && <MemoMessagesListChat messages={messages as IMessage[]} user={user}/> }
            </div>
        </div>
        <div className={"flex  shrink-0 basis-1/12 bg-gray-50 border-t p-2"}>
            <MemoNewMessage user={user} activeChatId={activeChat.id}/>
        </div>
    </div>;
};

export const MemoMessagesChat = memo(MessagesChat)