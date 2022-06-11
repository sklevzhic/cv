import React from 'react'
import {firestore} from "../../firebaseconfig";
import {addDoc, collection, orderBy} from 'firebase/firestore';
import {User} from "firebase/auth";
import {IChat} from '../models/IChat';
import {isEqualArrays} from "../utils/isEqualArrays";
import cn from "classnames"

interface UsersChatProps {
    handleActiveChat: (v: IChat) => void,
    users: any
    user: User | null | undefined,
    activeChatId?: string
}

const UsersChat: React.FC<UsersChatProps> = ({handleActiveChat, users, user, activeChatId}) => {
    console.log("UsersChat");
    const chatsRef = collection(firestore, `chats`)
    users = users?.filter((el: any) => el.users.includes(user?.email))

    const isCreatedChat = (chatsData: any) => {
        return users.filter((el: any) => isEqualArrays(el.users, chatsData)).length
    }

    const handleAddChat = () => {
        let email = prompt("Введите email собеседника")
        if (email && email.trim() !== "") {
            let emails = [user?.email, email]
            if (!isCreatedChat(emails)) {
                addDoc(chatsRef, {users: emails}).then(res => {
                    console.log(res)
                })
            } else {
                let chat = {} as IChat
                users.forEach((el: any) => {
                    // @ts-ignore
                    if (isEqualArrays(el.users, emails)) {
                        chat = el
                    }
                })
                handleActiveChat(chat)
            }
        }
    }


    return <div className={"flex flex-col"}>
        <button onClick={handleAddChat}> add Chat</button>
        <div
            className="w-full text-gray-900">
            {
                users?.map((el: IChat) => {
                    return <button key={el.id} type="button" disabled={el.id === activeChatId} onClick={() => handleActiveChat(el)}
                                   className={cn("relative inline-flex items-center w-full px-4 py-2 text-sm" +
                                       "border-y border-gray-200 " +
                                       "hover:bg-lime-500 hover:text-white focus:z-10 " +
                                       "focus:ring-2 focus:bg-lime-500 focus:text-white",
                                       (el.id === activeChatId) && "bg-lime-500 text-white"
                                   )}>
                        {el.title}
                    </button>
                })
            }
        </div>


    </div>
};

export const MemoUsersChat = React.memo(UsersChat);