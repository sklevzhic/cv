import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from '../../store';
import {getOtherEmail} from '../utils/getOtherEmail';
import {useCollectionData} from "react-firebase-hooks/firestore";
import {firestore} from "../../firebaseconfig";
import {addDoc, collection, orderBy} from 'firebase/firestore';
import {User} from "firebase/auth";
import { IChat } from '../models/IChat';

interface IUser {
    id: string,
    users: string[],

}

interface UsersChatProps {
    handleActiveChat: (v: IChat) => void,
    users: any
    user: User | null | undefined,
}

export const UsersChat: React.FC<UsersChatProps> = ({handleActiveChat, users, user}) => {
    const chatsRef = collection(firestore, `chats`)

    const handleAddChat = () => {
        let email = prompt("Введите email собеседника") || "sklevzhic@gmail.com"
        if (email === user?.email) {
            let email = prompt("Такой чат уже есть. Введите другой емайл")
        } else {
            addDoc(chatsRef, {users: [user?.email, email]})
        }
    }


    return <div className={"flex flex-col"}>
        <button onClick={handleAddChat}> add Chat </button>
        <div
            className="w-full text-gray-900 bg-white border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            {
                users.map((el: IChat) => {

                    return <button key={el.id} type="button" onClick={() => handleActiveChat(el)}
                                   className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700
                    focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500
                    dark:focus:text-white">
                        {el.title}
                    </button>
                })
            }
        </div>


    </div>
};