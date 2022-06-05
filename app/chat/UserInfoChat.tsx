import { User } from 'firebase/auth';
import React from 'react'

import {auth} from '../../firebaseconfig';

interface UserInfoChatProps {
    user: User | null | undefined
}

export const UserInfoChat: React.FC<UserInfoChatProps> = ({user}) => {
    function handleSignOut() {
        auth.signOut()
    }

    return <div className={"name"}>
        {
            user && <div className={"flex justify-between"}>
                <div className="flex items-center space-x-4 p-2">
                    {user?.photoURL && <img className="w-12 h-12 rounded-full" src={user?.photoURL} alt=""/>}
                    <div className="space-y-0 font-medium">
                        <div>{user?.displayName}</div>
                    </div>
                </div>
                <button className={"bg-red-200"} onClick={handleSignOut}>out</button>
            </div>
        }

    </div>;
};