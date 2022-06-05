import {NextPage} from "next";
import React, {useState} from 'react';
import {UserInfoChat} from "../app/chat/UserInfoChat";
import {MessagesChat} from "../app/chat/MessagesChat";
import {useAuthState} from 'react-firebase-hooks/auth';

import {UsersChat} from "../app/chat/UsersChat";
import {auth} from "../firebaseconfig";
import {LoginChat} from "../app/chat/LoginChat";

const ChatPage: NextPage = () => {
    const [user, loading, error] = useAuthState(auth);
    let [activeChat, setActiveChatId] = useState<string>("")

    if (!(user || loading)) return <LoginChat/>

    const handleActiveChat = (id: string) => {
        setActiveChatId(id)
    }


    return (
        <div className={"max-w-7xl mx-auto flex flex border border-b-gray-200"}>
            {
                user
                    ? <>
                        <div className={"flex flex-col basis-1/5"}>
                            <UserInfoChat user={user}/>
                            <UsersChat user={user} handleActiveChat={handleActiveChat}/>
                        </div>
                        <div className={"flex flex-col basis-4/5 border-l"}>
                            {
                                !!activeChat
                                    ?
                                    <MessagesChat activeChat={activeChat} user={user} handleActiveChat={handleActiveChat}/>
                                    : <>Выберите чат</>
                            }
                        </div>
                    </>
                    : <>Loading</>

            }

        </div>
    )
}

export default ChatPage

