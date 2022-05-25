import {NextPage} from "next";
import TitlePage from "../app/components/TitlePage";
import React from "react";
import TodoList from "../app/components/TodoList";
import {useDispatch, useSelector} from "react-redux";
import { RootState } from "../store";
import AddNewItem from "../app/components/AddNewItem";
import {setNewDesk} from "../store/slices/todoSlice";

const TodoPage: NextPage = () => {
    const desks = useSelector((state:RootState) => state.todo.desks)
    const dispatch = useDispatch()
    const addDesk = (title: string) => {
        dispatch(setNewDesk(title))
    }

    return <div>
        <TitlePage text={"Todo List"}/>
        <div className="grid overflow-hidden grid-flow-row-dense items-start grid-cols-4 m-3 ">
            {
                desks.map(el => {
                    return <TodoList key={el.id} idDesk={el.id} title={el.name} items={el.todos}/>
                })
            }
            <div className={"border m-2 p-1 bg-gray-100 text-center h-auto"}>
                <div className={"flex justify-between border-b p-1"}>
                    <AddNewItem textBtn={"Add desk"} save={addDesk}/>
                </div>
            </div>
        </div>

    </div>
}

export default TodoPage
