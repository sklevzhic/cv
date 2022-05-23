import {AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import {ITodo} from "../../app/models/ITodo";


export interface TodoState {
    todos: ITodo[]
}

const initialState: TodoState = {
    todos: [],
}

export const todoSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setTodos: () => {
            console.log("a")
        }

    },
})

export const { setTodos } = todoSlice.actions

export default todoSlice.reducer