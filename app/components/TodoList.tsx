import React, {FC} from "react";
import TodoItem from "./TodoItem";
import {ITodo} from "../models/ITodo";
import AddNewItem from "./AddNewItem";


interface TodoListProps {
    title: string,
    items: ITodo[]
}

const TodoList: FC<TodoListProps> = ({title, items}) => {
    return <div className={"border m-2 p-1 bg-gray-100 text-center h-auto"}>
        <div className={"flex justify-between border-b p-1"}>
            <div className={"text-xl"}>{title}</div>
            <div>X</div>
        </div>
        <div className={"text-left"}>
            <div className={"flex flex-col"}>
                {
                    items.map(el => {
                        return <TodoItem key={el.id} text={el.title}/>
                    })
                }
                <AddNewItem />
            </div>
        </div>
    </div>
}

export default TodoList