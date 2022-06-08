import {NextPage} from "next";
import React, {useState} from 'react';
import {UserInfoChat} from "../app/chat/UserInfoChat";
import {MessagesChat} from "../app/chat/MessagesChat";
import {useAuthState} from 'react-firebase-hooks/auth';

import {UsersChat} from "../app/chat/UsersChat";
import {auth, firestore} from "../firebaseconfig";
import {AuthChat} from "../app/chat/AuthChat";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {collection} from "firebase/firestore";
import {getOtherEmail} from "../app/utils/getOtherEmail";
import { IChat } from "../app/models/IChat";

const ChatPage: NextPage = () => {
    const [user, loading, error] = useAuthState(auth);
    let [,,, snapshotChats] = useCollectionData(collection(firestore, "chats"))
    let [activeChat, setActiveChatId] = useState<IChat | null>(null)

    let userEmail = user?.email as string
    let chatUsers = snapshotChats?.docs.map((doc) => {
        return {
            id: doc.id,
            title: doc.data().title || (doc.data().users.length === 2) ? getOtherEmail(doc.data().users, userEmail) : "Group",
            users: doc.data().users,
        }
    })

    let filteredChatUsers = chatUsers ? chatUsers.filter(el => el.users) : []

    const handleActiveChat = (chat: IChat | null) => setActiveChatId(chat)

    if (!(user || loading)) return <AuthChat/>

    return (
        <div className={"max-w-7xl h-[600px] mx-auto flex flex border border-b-gray-200 overflow-hidden"}>
            {
                user
                    ? <>
                        <div className={"flex flex-col basis-1/5"}>
                            <UserInfoChat user={user}/>
                            <UsersChat users={filteredChatUsers} user={user} handleActiveChat={handleActiveChat}/>
                        </div>
                        <div className={"flex flex-col bg-gradient-to-br from-lime-100 to-green-200 basis-4/5 border-l"}>
                            {
                                !!activeChat
                                    ?
                                    <MessagesChat activeChat={activeChat} user={user} handleActiveChat={handleActiveChat}/>
                                    : <div className={"w-full"}>Выберите чат</div>
                            }
                        </div>
                    </>
                    : <>Loading</>

            }

        </div>
    )
}

export default ChatPage

