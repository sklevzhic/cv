import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {fetchUsers} from "./actionCreators";

interface IUser {
    id: string,
    users: string[]
}

export interface ChatState {
    users: IUser[];
    loading: boolean;
    error: string;
}

const initialState: ChatState = {
    users: [] as IUser[],
    loading: false,
    error: '',
}

export const chatSlice = createSlice({
        name: 'chats',
        initialState,
        reducers: { },
        extraReducers: {
            [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
                state.loading = false;
                state.error = ''
                state.users = action.payload;
            },
            [fetchUsers.pending.type]: (state) => {
                state.loading = true
            },
            [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
                state.loading = false;
                state.error = action.payload
            },
        }
    }
)

// export const {  } = chatSlice.actions

export default chatSlice.reducer