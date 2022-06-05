import React from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../../firebaseconfig';

interface LoginChatProps {

}

export const LoginChat: React.FC<LoginChatProps> = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);

    const login = () => signInWithGoogle()

    return (
        <div className={"max-w-7xl mx-auto  flex border border-b-neutral-400"}>
            <button onClick={login}>Войти</button>
        </div>
    )
};