import {NextPage} from "next";
import {useSelector} from "react-redux";
import {RootState} from "../store";
import TitlePage from "../app/components/TitlePage";
import React from "react";
import TodoList from "../app/components/TodoList";
import { ITodo } from "../app/models/ITodo";

const todos = [
    {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
},
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
    },
]
const todos1 = [] as ITodo[]

const HomePage: NextPage = () => {
    // let [one, wto, three] = useSelector((state: RootState) => state.portfolio.items)

    return <div>
        <TitlePage text={"Todo List"}/>
        <div className="grid overflow-hidden grid-flow-row-dense items-start grid-cols-4 m-3 ">
            <TodoList title={"todo"} items={todos}/>
            <TodoList title={"doing"} items={todos1}/>
            <TodoList title={"completed"} items={todos}/>
            <div>add a new list</div>
        </div>


    </div>
}

export default HomePage
