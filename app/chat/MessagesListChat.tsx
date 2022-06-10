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


interface MessagesListChatProps {
    messages: any[] | undefined,
    user: any
}

export const MessagesListChat: React.FC<MessagesListChatProps> = ({messages, user}) => {

    return <>
        {
            messages?.map((message,i) => {

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
        }
    </>;
};