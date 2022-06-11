import React, {memo, useState} from 'react'
import {useSignInWithEmailAndPassword, useSignInWithGoogle} from 'react-firebase-hooks/auth';
import {auth, firestore} from '../../firebaseconfig';
import {MdSend} from "react-icons/md";
import {addDoc, collection} from "firebase/firestore";
import {User} from "firebase/auth";
import {LoginChat} from "./LoginChat";

interface NewMessageProps {
    user: User | null | undefined,
    activeChatId: string,
}

const NewMessage: React.FC<NewMessageProps> = ({user, activeChatId}) => {
    console.log("NewMessage");
    const recipesCollectionRef = collection(firestore, `chats/${activeChatId}/messages`)
    const [text, setText] = useState<string>("")
    const handleTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value)
    }

    const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.keyCode === 13) sendMessage()
        // if (e.keyCode === 27) handlerClose()
    }

    const sendMessage = () => {
        if (text) {
            let data = {
                displayName: user?.displayName,
                photoUrl: user?.photoURL,
                timestamp: Date.now(),
                sender: user?.email,
                text,
            }

            addDoc(recipesCollectionRef, data)
            setText("")
        }
    }

    return <>
        <input type="text" id="large-input" value={text} onChange={handleTextInput} onKeyUp={handleKeyUp}
               className="block w-full text-gray-900 border border-gray-300 p-1  rounded-lg bg-white sm:text-md focus:ring-blue-500 focus:border-blue-500"/>
        <button disabled={(!text) && true} className={"bg-lime-300 p-2 rounded-full"} onClick={sendMessage}><MdSend/>
        </button>
    </>
};

export const MemoNewMessage = memo(NewMessage)