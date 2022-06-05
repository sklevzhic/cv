import { configureStore } from '@reduxjs/toolkit'
import portfolioReducer from "../store/slices/portfolioSlice"
import todoReducer from "../store/slices/todoSlice"
import authReducer from "./slices/auth/authSlice"
import chatReducer from "./slices/chat/chatSlice"


export const store = configureStore({
    reducer: {
        portfolio: portfolioReducer,
        todo: todoReducer,
        auth: authReducer,
        chat: chatReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch