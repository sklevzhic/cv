import React, {useEffect} from 'react'

import router from 'next/router';
import {fetchUsers} from "../../store/slices/chat/actionCreators";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from '../../store';
import {getOtherEmail} from '../utils/getOtherEmail';

interface UsersChatProps {

}

export const UsersChat: React.FC<UsersChatProps> = ({}) => {
    const dispatch = useDispatch<AppDispatch>()
    let users = useSelector((state: RootState) => state.chat.users)
    let {email} = useSelector((state: RootState) => state.auth.user)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])


    return <div className={"flex flex-col"}>
        {
            users

                ?.filter(el => el.users.includes(email))
                .map(el => {
                    return <div key={el.id}> {getOtherEmail(el?.users, email)} </div>
                })
        }
    </div>
};