import {createAsyncThunk} from "@reduxjs/toolkit";
import {GoogleAuthProvider, onAuthStateChanged, signInWithPopup, User, signOut} from "firebase/auth";
import { auth} from "../../../firebaseconfig";


export const signIn = createAsyncThunk(
    'auth/signIn',
    async (_, thunkAPI) => {
        try {
            const provider = new GoogleAuthProvider();
            let response = await signInWithPopup(auth, provider)
            return response.user
        } catch (e) {
            return thunkAPI.rejectWithValue("Не удалось войти")
        }
    }
)

export const checkAuth = createAsyncThunk(
    'auth/checkAuth',
    async (_, thunkAPI) => {
        try {
            return new Promise<User | {}>((resolve, reject) => {
                const unsubscribe = onAuthStateChanged(auth, (user) => {
                    if (user) {
                        resolve(user);
                    } else {
                        // @ts-ignore
                        resolve(null);
                    }
                    unsubscribe();
                });
            })

        } catch (e) {
            return thunkAPI.rejectWithValue("Не удалось войти")
        }
    }
)
export const signOutAC = createAsyncThunk(
    'auth/signOutAC',
    async (_, thunkAPI) => {
        try {
            signOut(auth)
        } catch (e) {
            return thunkAPI.rejectWithValue("Не удалось войти")
        }
    }
)
