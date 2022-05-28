import React, {FC, useEffect, useRef} from "react";
import TodoItem from "./TodoItem";
import {ITodo} from "../models/ITodo";
import AddNewItem from "./AddNewItem";
import {useDispatch} from "react-redux";
import {removeTodo, removeDesk, setTodo} from "../../store/slices/todoSlice";
import {MdClose} from "react-icons/md"
import {usePrevious} from "../hooks/usePrevious";

interface TodoListProps {
    idDesk: number
    title: string,
    items: ITodo[]
}

const TodoList: FC<TodoListProps> = ({title, items, idDesk}) => {
    const dispatch = useDispatch()
    const heightDiv = useRef<HTMLDivElement | null>(null)
    const scrollHeight = heightDiv.current?.scrollHeight
    let prevItemslLength = usePrevious(items.length) || 0

    useEffect(() => {
        if (items.length > prevItemslLength)
            heightDiv.current?.scrollTo({top: scrollHeight, behavior: 'smooth'})
    }, [items])
    const handlerRemoveDesk = () => {
        dispatch(removeDesk(idDesk))
    }
    const addTodoItem = (text: string) => {
        dispatch(setTodo({idDesk, text}))
    }
    const deleteTodoItem = (id: number) => {
        dispatch(removeTodo({idDesk, id}))
    }

    return <div className={"border m-2 p-1 w-[16em] bg-gray-100"}>
        <div className={"flex justify-between border-b p-1 items-center"}>
            <div className={"basis-4/6 font-semibold overflow-hidden"}> {title}

            </div>
            {!!items.length && <div className={"basis-1.5/6 text-sm text-lime-700"}>({items.length} шт.)</div>}
            <MdClose onClick={handlerRemoveDesk} className={"basis-0.5/6 opacity-40 hover:opacity-100"}/>
        </div>
        <div ref={heightDiv} className={"text-left flex flex-col max-h-heightItemsInDesk overflow-auto "}>
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
        <AddNewItem save={addTodoItem} textBtn={"+ Add card"}/>
    </div>
}

export default TodoList