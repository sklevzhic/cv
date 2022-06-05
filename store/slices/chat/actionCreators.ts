import {createAsyncThunk} from "@reduxjs/toolkit";
import {collection, query, onSnapshot} from "firebase/firestore";
import {auth, firestore} from "../../../firebaseconfig";

export const fetchUsers = createAsyncThunk(
    'chat/fetchUsers',
    async (_, thunkAPI) => {
        try {
            return new Promise<any[]>((resolve, reject) => {
                const q = query(collection(firestore, "chats"));
                const unsubscribe = onSnapshot(q, (querySnapshot) => {
                    let res: any = []
                    querySnapshot.forEach((doc) => {
                        res.push({
                            id: doc.id,
                            ...doc.data()
                        })
                    });
                    resolve(res)
                    unsubscribe();
                })


            });
        } catch (e) {
            return thunkAPI.rejectWithValue("Не удалось загрузить список пользователей")
        }
    }
)
