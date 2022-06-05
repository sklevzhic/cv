import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {signOutAC} from "../../store/slices/auth/actionCreators";

interface UserInfoChatProps {

}

export const UserInfoChat: React.FC<UserInfoChatProps> = () => {
    let { user } = useSelector((state: RootState) => state.auth)
    let dispatch = useDispatch<AppDispatch>()

    function handleSignOut() {
        dispatch(signOutAC())
    }

    return <div className={"name"}>
        <div className="flex items-center space-x-4 p-2">
            { user?.photoURL && <img className="w-12 h-12 rounded-full" src={user?.photoURL} alt=""/>}
            <div className="space-y-0 font-medium">
                <div>{user?.displayName}</div>
            </div>
        </div>
        <div>

            <div>{user?.displayName}</div>
        </div>
        <button className={"bg-red-200"} onClick={handleSignOut}>out</button>
    </div>;
};