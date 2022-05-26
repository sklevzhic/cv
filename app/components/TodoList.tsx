import React, {FC} from "react";
import TodoItem from "./TodoItem";
import {ITodo} from "../models/ITodo";
import AddNewItem from "./AddNewItem";
import {useDispatch} from "react-redux";
import {removeTodo, removeDesk, setTodo} from "../../store/slices/todoSlice";
import {MdClose} from "react-icons/md"

interface TodoListProps {
    idDesk: number
    title: string,
    items: ITodo[]
}

const TodoList: FC<TodoListProps> = ({title, items, idDesk}) => {
    const dispatch = useDispatch()
    const handlerRemoveDesk = () => {
        dispatch(removeDesk(idDesk))
    }
    const addTodoItem = (text: string) => {
        dispatch(setTodo({idDesk, text}))
    }
    const deleteTodoItem = (id: number) => {
        dispatch(removeTodo({idDesk, id}))
    }

    return <div className={"border m-2 p-1 min-w-[20em] bg-gray-100 text-center h-auto"}>
        <div className={"flex justify-between no border-b p-1"}>
            <div className={"text-xl"}>{title}</div>
            <MdClose onClick={handlerRemoveDesk}  className={"opacity-40 hover:opacity-100"}/>
        </div>
        <div className={"text-left flex flex-col"}>

                {items
                    ? items.map(el => {
                        return <TodoItem key={el.id}
                                         idDesk={idDesk}
                                         id={el.id}
                                         deleteTodoItem={() => deleteTodoItem(el.id)}
                                         text={el.title}
                        />
                    })
                    : <>пусто</>
                }
                <AddNewItem save={addTodoItem}  textBtn={"+ Add card"}/>

        </div>
    </div>
}

export default TodoList