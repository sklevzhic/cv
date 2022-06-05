import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from '../../store';
import {getOtherEmail} from '../utils/getOtherEmail';
import {useCollectionData} from "react-firebase-hooks/firestore";
import {firestore} from "../../firebaseconfig";
import {addDoc, collection, orderBy} from 'firebase/firestore';
import {User} from "firebase/auth";

interface IUser {
    id: string,
    users: string[]
}

interface UsersChatProps {
    user: User | null | undefined,
    handleActiveChat: (v: string) => void
}

export const UsersChat: React.FC<UsersChatProps> = ({user, handleActiveChat}) => {
    let [chats, loading, error, snapshot] = useCollectionData(collection(firestore, "chats"))
    let chatUsers = snapshot?.docs.map((doc) => {
        let obj = {
            id: doc.id,
            users: doc.data().users,
        }
        return obj
    })
    const chatsRef = collection(firestore, `chats`)
    let filteredChatUsers = chatUsers ? chatUsers.filter(el => {
        let users = el.users
        return users.includes(user?.email)
    }) : []



    const handleAddChat = () => {
        // let a = prompt("Введите email собеседника")
        // console.log()
        addDoc(chatsRef, ["data", "dsfsdf"])
    }

    let userEmail = user?.email as string

    return <div className={"flex flex-col"}>
        <button onClick={handleAddChat}>
            add Chat
        </button>
        {
            filteredChatUsers.map(el => {
                return <div key={el.id} onClick={() => handleActiveChat(el.id)}>{getOtherEmail(el.users, userEmail)}</div>
            })
        }
    </div>
};