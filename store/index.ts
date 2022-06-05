import { configureStore } from '@reduxjs/toolkit'
import portfolioReducer from "../store/slices/portfolioSlice"
import todoReducer from "../store/slices/todoSlice"


export const store = configureStore({
    reducer: {
        portfolio: portfolioReducer,
        todo: todoReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch