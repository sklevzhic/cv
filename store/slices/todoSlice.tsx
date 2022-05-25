import {AnyAction, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IDesk, ITodo} from "../../app/models/ITodo";


export interface TodoState {
    desks: IDesk[]
}

const initialState: TodoState = {
    desks: [],
}

export const todoSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        initialDesks: (state) => {
            let users = localStorage.getItem("users")
            if (!!users) {
                state.desks = JSON.parse(users)
            }
        },

        saveDesksToLocalStorage: (state) => {
            localStorage.setItem("users", JSON.stringify(state.desks))
        },

        setTodo: ( state, action: PayloadAction<{ idDesk: number, text: string }> ) => {
            state.desks = state.desks.map(desk => {
                if (action.payload.idDesk === desk.id) {
                    return {
                        ...desk,
                        todos: [...desk.todos, {
                            title: action.payload.text ,
                            id: Date.now(),
                            completed: false
                        }]
                    }
                } else {
                    return desk
                }
            })
            localStorage.setItem("users", JSON.stringify(state.desks))
        },
        removeTodo: ( state, action: PayloadAction<{ idDesk: number, id: number }> ) => {
            state.desks = state.desks.map(desk => {
                if (action.payload.idDesk === desk.id) {
                    return {
                        ...desk,
                        todos: desk.todos.filter(todo => todo.id !== action.payload.id)
                    }
                } else {
                    return desk
                }
            })
            localStorage.setItem("users", JSON.stringify(state.desks))

        },
        changeTitle: ( state, action: PayloadAction<{ idDesk: number, id: number, title: string }> ) => {
            state.desks = state.desks.map(desk => {
                if (action.payload.idDesk === desk.id) {
                    return {
                        ...desk,
                        todos: desk.todos.map(todo => {
                            if (action.payload.id === todo.id) {
                                return {
                                    ...todo,
                                    title: action.payload.title
                                }
                            } else {
                                return todo
                            }
                        })
                    }
                } else {
                    return desk
                }
            })
            localStorage.setItem("users", JSON.stringify(state.desks))
        },
        removeDesk: ( state, action: PayloadAction<number> ) => {
            state.desks = state.desks.filter(desk => desk.id !== action.payload)
            localStorage.setItem("users", JSON.stringify(state.desks))
        },
        setNewDesk: ( state, action: PayloadAction<string> ) => {
            state.desks = [... state.desks, {
                id: Date.now(),
                name: action.payload,
                todos: []
            }]
            localStorage.setItem("users", JSON.stringify(state.desks))
        },


    },
})

export const {initialDesks, setTodo, removeTodo, changeTitle, removeDesk, setNewDesk} = todoSlice.actions

export default todoSlice.reducer