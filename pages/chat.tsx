import {NextPage} from "next";
import React, {useState} from 'react';
import {MemoUserInfoChat} from "../app/chat/UserInfoChat";
import {MemoMessagesChat} from "../app/chat/MessagesChat";
import {useAuthState} from 'react-firebase-hooks/auth';

import {MemoUsersChat} from "../app/chat/UsersChat";
import {auth, firestore} from "../firebaseconfig";
import {AuthChat} from "../app/chat/AuthChat";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {collection} from "firebase/firestore";
import {getOtherEmail} from "../app/utils/getOtherEmail";
import {IChat} from "../app/models/IChat";

const ChatPage: NextPage = () => {
    const [user, loading, error] = useAuthState(auth);
    let [,,, snapshotChats] = useCollectionData(collection(firestore, "chats"))
    let [activeChat, setActiveChatId] = useState<IChat | null>(null)
    let userEmail = user?.email as string
    let chatUsers = snapshotChats?.docs.map((doc) => {
        let title = doc.data().users.length === 2 ? getOtherEmail(doc.data().users, userEmail) : "Group"
            return {
            id: doc.id,
            title: doc.data().title || title,
            users: doc.data().users,
        }
    })
    const handleActiveChat = (chat: IChat | null) => setActiveChatId(chat)

    if (!(user || loading)) return <AuthChat/>

    if (error) {
        alert("Ошибка при входе в систему. Повторите позже . Message" + error.message)
    }

    return (<div className={"max-w-7xl h-[600px] mx-auto flex flex border border-b-gray-200 overflow-hidden"}>
            {
                user
                    ? <>
                        <div className={"flex flex-col basis-1/5"}>
                            <MemoUserInfoChat user={user}/>
                            <MemoUsersChat users={chatUsers} activeChatId={activeChat?.id}
                                           user={user} handleActiveChat={handleActiveChat}
                                           // setActiveChat={}
                            />
                        </div>
                        <div className={"flex flex-col text-center justify-center bg-gradient-to-br from-lime-100 to-green-200 basis-4/5 border-l"}>
                            {
                                !!activeChat
                                    ?
                                    <MemoMessagesChat activeChat={activeChat} user={user} handleActiveChat={handleActiveChat}/>
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

