import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {checkAuth, signIn, signOutAC} from "./actionCreators";
import { User } from 'firebase/auth';


export interface AuthState {
    user: User | null;
    auth: boolean;
    loading: boolean;
    error: string;
}

const initialState: AuthState = {
    auth: false,
    user: null,
    loading: false,
    error: '',
}

export const authSlice = createSlice({
        name: 'auth',
        initialState,
        reducers: { },
        extraReducers: {
            [signIn.fulfilled.type]: (state, action: PayloadAction<User | null>) => {
                state.loading = false;
                state.error = ''
                state.user = action.payload;
            },
            [signIn.pending.type]: (state) => {
                state.loading = true
            },
            [signIn.rejected.type]: (state, action: PayloadAction<string>) => {
                state.loading = false;
                state.error = action.payload
            },

            [checkAuth.fulfilled.type]: (state, action: PayloadAction<User | null>) => {
                state.loading = false;
                state.error = ''
                state.user = action.payload;
            },
            [checkAuth.pending.type]: (state) => {
                state.loading = true
            },
            [checkAuth.rejected.type]: (state, action: PayloadAction<string>) => {
                state.loading = false;
                state.error = action.payload
            },
            [signOutAC.fulfilled.type]: (state) => {
                state.loading = false;
                state.error = ''
                state.user = null;
            },
            [signOutAC.pending.type]: (state) => {
                state.loading = true
            },
            [signOutAC.rejected.type]: (state, action: PayloadAction<string>) => {
                state.loading = false;
                state.error = action.payload
            }
        }
    }
)

// export const {  } = chatSlice.actions

export default authSlice.reducer