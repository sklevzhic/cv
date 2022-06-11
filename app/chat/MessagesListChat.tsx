import React, { memo } from 'react'
import {User} from "firebase/auth";

import {MemoMessageChat} from "./MessageChat";
import {IMessage} from "../models/IMessage";


interface MessagesListChatProps {
    messages: IMessage[],
    user: User | null | undefined,
}

const MessagesListChat: React.FC<MessagesListChatProps> = ({messages, user}) => {
    console.log("MessagesListChat")
    const checkLast = (sender: string, nextSender:string): boolean =>  {
        return (sender === nextSender) ? false : true
    }

    return <>
        {  messages.length !== 0
            ? messages.map((message, i) => {
                return <MemoMessageChat
                    key={i}
                    timestamp={message.timestamp}
                    text={message.text}
                    img={message.photoUrl}
                    name={message.displayName || message.sender}
                    sender={user?.email === message.sender}
                    last={
                        (i === messages.length - 1)
                            ? true : checkLast(messages[i].sender, messages[i + 1].sender)}
                />
            })
            :<div className={"flex flex-col text-center justify-center h-full"}>
                <p>Введите сообщение</p>
            </div>

        }
    </>;
};

export const MemoMessagesListChat = memo(MessagesListChat)