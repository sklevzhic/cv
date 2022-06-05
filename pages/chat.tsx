import {NextPage} from "next";
import React, {useEffect} from 'react';
import {UserInfoChat} from "../app/chat/UserInfoChat";
import {MessagesChat} from "../app/chat/MessagesChat";
import {LoginChat} from "../app/chat/LoginChat";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store";
import {checkAuth} from "../store/slices/auth/actionCreators";
import { UsersChat } from "../app/chat/UsersChat";

const ChatPage: NextPage = () => {
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        dispatch(checkAuth())
    }, [])

    let { user, loading } = useSelector((state: RootState) => state.auth)

    if (loading) return <>Spinner</>
    if (!user) return <LoginChat />

    return (
        <div className={"max-w-7xl mx-auto flex flex border border-b-gray-200"}>
            {
                true
                    ? <>
                        <div className={"flex flex-col basis-1/5"}>
                            <UserInfoChat/>
                            <UsersChat/>
                        </div>
                        <div className={"flex flex-col basis-4/5 border-l"}>
                            {
                                true
                                    ? <MessagesChat/>
                                    : <>Выберите чат</>
                            }
                        </div>
                    </>
                    : <>Load</>

            }

        </div>
    )
}

export default ChatPage

