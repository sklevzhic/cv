import React, {FC} from "react";
import TodoItem from "./TodoItem";
import {ITodo} from "../models/ITodo";
import AddNewItem from "./AddNewItem";
import {useDispatch} from "react-redux";
import {removeTodo, changeTitle} from "../../store/slices/todoSlice";
import {MdClose} from "react-icons/md"

interface TodoListProps {
    idDesk: number
    title: string,
    items: ITodo[]
}

const TodoList: FC<TodoListProps> = ({title, items, idDesk}) => {
    const dispatch = useDispatch()

    const deleteTodoItem = (id: number) => {
        dispatch(removeTodo({idDesk, id}))
    }
    const changeTitleTodo = (id: number) => {
        dispatch(changeTitle({idDesk, id, title: "new text"}))
    }


    return <div className={"border m-2 p-1 bg-gray-100 text-center h-auto"}>
        <div className={"flex justify-between border-b p-1"}>
            <div className={"text-xl"}>{title}</div>
            <MdClose className={"opacity-40 hover:opacity-100"}/>
        </div>
        <div className={"text-left"}>
            <div className={"flex flex-col"}>
                {items
                    ? items.map(el => {
                        return <TodoItem       key={el.id}
                            deleteTodoItem={() => deleteTodoItem(el.id)}
                            changeTitleTodo={() => changeTitleTodo(el.id)}
                            text={el.title}
                        />
                    })
                    : <>пусто</>
                }
                <AddNewItem idDesk={idDesk}/>
            </div>
        </div>
    </div>
}

export default TodoList