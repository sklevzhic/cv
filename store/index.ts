import { configureStore } from '@reduxjs/toolkit'
import portfolioReducer from "../store/slices/portfolioSlice"
import todoReducer from "../store/slices/todoSlice"
import labyrinthReducer from "./slices/labyrinthSlice";


export const store = configureStore({
    reducer: {
        portfolio: portfolioReducer,
        todo: todoReducer,
        labyrinth: labyrinthReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch