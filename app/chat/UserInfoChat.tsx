import { User } from 'firebase/auth';
import React, {useEffect} from 'react'
import {RiLogoutBoxRFill} from "react-icons/ri"
import {auth} from '../../firebaseconfig';

interface UserInfoChatProps {
    user: User | null | undefined
}
const UserInfoChat: React.FC<UserInfoChatProps> = ({user}) => {

    function handleSignOut() {
        auth.signOut()
    }

    useEffect(() => {

    }, [user?.displayName])

    return <div className={"name"}>
        {
            user && <div className={"flex justify-between border-b"}>
                <div className="flex basis-5/6 items-center space-x-4 p-2">
                    {user?.photoURL && <img className="w-12 h-12 rounded-full" src={user?.photoURL} alt=""/>}
                    <div className="space-y-0 font-medium">
                        <div>{user?.displayName || user.email}</div>
                    </div>
                </div>
                <button className={"basis-1/6"} onClick={handleSignOut}>
                    <RiLogoutBoxRFill className={"space-x-4"}/>
                </button>
            </div>
        }

    </div>;
};
export const MemoUserInfoChat = React.memo(UserInfoChat);
