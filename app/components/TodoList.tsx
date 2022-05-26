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

    return <div className={"border m-2 p-1 w-[16em] bg-gray-100 text-center"}>
        <div className={"flex justify-between border-b p-1"}>
            <div className={"text-xl"}>{title}</div>
            <MdClose onClick={handlerRemoveDesk}  className={"opacity-40 hover:opacity-100"}/>
        </div>
        <div className={"text-left flex flex-col max-h-heightItemsInDesk overflow-auto "}>
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
        </div>
        <AddNewItem save={addTodoItem}  textBtn={"+ Add card"}/>
    </div>
}

export default TodoList