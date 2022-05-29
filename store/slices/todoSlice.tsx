import {AnyAction, createSlice, current, PayloadAction} from '@reduxjs/toolkit'
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
        saveDesks: (state) => {
            localStorage.setItem("users", JSON.stringify(state.desks))
        },
        setTodo: (state, action: PayloadAction<{ idDesk: number, text: string }>) => {
            state.desks = state.desks.map(desk => {
                if (action.payload.idDesk === desk.id) {
                    return {
                        ...desk,
                        todos: [...desk.todos, {
                            title: action.payload.text,
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
        removeTodo: (state, action: PayloadAction<{ idDesk: number, id: number }>) => {
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
        changeTitle: (state, action: PayloadAction<{ idDesk: number, id: number, title: string }>) => {
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
        removeDesk: (state, action: PayloadAction<number>) => {
            state.desks = state.desks.filter(desk => desk.id !== action.payload)
            localStorage.setItem("users", JSON.stringify(state.desks))
        },
        setNewDesk: (state, action: PayloadAction<string>) => {
            state.desks = [...state.desks, {
                id: Date.now(),
                name: action.payload,
                todos: []
            }]
            localStorage.setItem("users", JSON.stringify(state.desks))
        },
        moveItem: (state, action: PayloadAction<{
            deskOld: number,
            idItem: number,
            deskNew: number,
            position: number
        }>) => {

            let itemsInOldDesk = state.desks.find(desk => desk.id === action.payload.deskOld)
            let activeItem = itemsInOldDesk?.todos.filter(item => item.id === action.payload.idItem)[0]
            let itemsInNewDesk = state.desks.find(desk => desk.id === action.payload.deskOld)
            let indexEl = itemsInNewDesk?.todos.findIndex(el => el.id === action.payload.position)

            state.desks = state.desks.map(desk => {
                if (desk.id === action.payload.deskNew) {
                    return {
                        ...desk,
                        todos: activeItem ? [...desk.todos, activeItem] : desk.todos
                    }
                }
                if (desk.id === action.payload.deskOld) {
                    return {
                        ...desk,
                        todos: desk.todos.filter(item => item.id !== action.payload.idItem)
                    }
                }
                return desk
            })


        }

    },
})

export const {initialDesks, setTodo, removeTodo, changeTitle, removeDesk, setNewDesk, moveItem} = todoSlice.actions

export default todoSlice.reducer