import React from 'react'
import {signIn} from "../../store/slices/auth/actionCreators";
import {useDispatch} from "react-redux";
import { AppDispatch } from '../../store';

interface LoginChatProps {

}

export const LoginChat: React.FC<LoginChatProps> = () => {
    const dispatch = useDispatch<AppDispatch>()
    const login = () => dispatch(signIn())

    return (
        <div className={"max-w-7xl mx-auto  flex border border-b-neutral-400"}>
            <button onClick={login}>Войти</button>
        </div>
    )
};