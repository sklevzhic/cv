import {AnyAction, createSlice, current, PayloadAction} from '@reduxjs/toolkit'
import {IDesk, ITodo, Marks} from "../../app/models/ITodo";


export interface TodoState {
    desks: IDesk[]
}

const initialState: TodoState = {
    desks: [
        {
            "id": 1654004857674,
            "name": "todo",
            "todos": [
                {
                    "title": "todo1",
                    "id": 1654004879642,
                    "completed": false
                },
                {
                    "title": "todo2",
                    "id": 1654004859690,
                    "completed": false,
                    "marks": []
                },
                {
                    "title": "todo3",
                    "id": 1654004864267,
                    "completed": false,
                    "marks": []
                },
                {
                    "title": "todo4",
                    "id": 1654004865251,
                    "completed": false,
                    "marks": []
                },
                {
                    "title": "todo5",
                    "id": 1654004883515,
                    "completed": false
                },
                {
                    "title": "todo6",
                    "id": 1654004863418,
                    "completed": false
                }
            ]
        },
        {
            "id": 1654006873618,
            "name": "doing",
            "todos": [
                {
                    "title": "todo1",
                    "id": 1654006876952,
                    "completed": false
                },
                {
                    "title": "todo2",
                    "id": 1654006880024,
                    "completed": false
                },
                {
                    "title": "todo3",
                    "id": 1654006884511,
                    "completed": false
                },
                {
                    "title": "todo4",
                    "id": 1654006886896,
                    "completed": false
                },
                {
                    "title": "todo5",
                    "id": 1654006889247,
                    "completed": false
                },
                {
                    "title": "todo6",
                    "id": 1654006890909,
                    "completed": false
                },
                {
                    "title": "todo7",
                    "id": 1654006893351,
                    "completed": false
                }
            ]
        },
        {
            "id": 1654006897711,
            "name": "done",
            "todos": [
                {
                    "title": "todo1",
                    "id": 1654006901040,
                    "completed": false
                },
                {
                    "title": "todo2",
                    "id": 1654006902520,
                    "completed": false
                },
                {
                    "title": "todo3",
                    "id": 1654006907632,
                    "completed": false
                },
                {
                    "title": "todo4",
                    "id": 1654006903872,
                    "completed": false
                },
                {
                    "title": "todo5",
                    "id": 1654006905536,
                    "completed": false
                },
                {
                    "title": "todo6",
                    "id": 1654006909528,
                    "completed": false
                }
            ]
        }
    ],
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
        setTodo: (state, action: PayloadAction<{ id: number, text: string }>) => {
            state.desks = state.desks.map(desk => {
                if (action.payload.id === desk.id) {
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
        removeTodo: (state, action: PayloadAction<{ idDesk: number, idTodo: number }>) => {
            state.desks = state.desks.map(desk => {
                if (action.payload.idDesk === desk.id) {
                    return {
                        ...desk,
                        todos: desk.todos.filter(todo => todo.id !== action.payload.idTodo)
                    }
                } else {
                    return desk
                }
            })
            localStorage.setItem("users", JSON.stringify(state.desks))

        },
        changeTitle: (state, action: PayloadAction<{ idDesk: number, id: number, title: string }>) => {
            let arr = state.desks.map(desk => {
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
            state.desks = arr
            localStorage.setItem("users", JSON.stringify(state.desks))
        },
        changeTitleDesk: (state, action: PayloadAction<{ idDesk: number, title: string }>) => {
            state.desks = state.desks.map(desk => {
                if (action.payload.idDesk === desk.id) {
                    return {
                        ...desk,
                        name: action.payload.title
                    }
                } else {
                    return desk
                }
            })
            localStorage.setItem("users", JSON.stringify(state.desks))
        },
        setMark: (state, action: PayloadAction<{ idDesk: number, idItem: number, mark: Marks }>) => {
            let arr = state.desks.map(desk => {
                if (action.payload.idDesk === desk.id) {
                    return {
                        ...desk,
                        todos: desk.todos.map(todo => {
                            if (action.payload.idItem === todo.id) {
                                return {
                                    ...todo,
                                    marks: (todo.marks)
                                        ? (todo.marks.includes(action.payload.mark))
                                            ? todo.marks.filter(mark => mark !== action.payload.mark)
                                            : [...todo.marks, action.payload.mark]
                                        : [action.payload.mark]
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
            state.desks = arr
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
        moveItem: (state, action: PayloadAction<IDesk[]>) => {
            state.desks = action.payload
            localStorage.setItem("users", JSON.stringify(state.desks))
        }

    },
})

export const {changeTitleDesk, initialDesks, setTodo, removeTodo, changeTitle, removeDesk, setNewDesk, moveItem, setMark} = todoSlice.actions

export default todoSlice.reducer