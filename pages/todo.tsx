import {NextPage} from "next";
import TitlePage from "../app/components/TitlePage";
import React from "react";
import TodoList from "../app/components/TodoList";
import {useSelector} from "react-redux";
import { RootState } from "../store";

const TodoPage: NextPage = () => {
    const desks = useSelector((state:RootState) => state.todo.desks)
    return <div>
        <TitlePage text={"Todo List"}/>
        <div className="grid overflow-hidden grid-flow-row-dense items-start grid-cols-4 m-3 ">
            {
                desks.map(el => {
                    return <TodoList key={el.id} idDesk={el.id} title={el.name} items={el.todos}/>
                })
            }
            <div>add a new list</div>
        </div>

    </div>
}

export default TodoPage
