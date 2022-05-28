import {NextPage} from "next";
import TitlePage from "../app/components/TitlePage";
import React, {useEffect, useRef, useState} from "react";
import TodoList from "../app/components/TodoList";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import AddNewItem from "../app/components/AddNewItem";
import {setNewDesk, initialDesks} from "../store/slices/todoSlice";
import {IDesk} from "../app/models/ITodo";
import {usePrevious} from "../app/hooks/usePrevious";



const TodoPage: NextPage = () => {
    const desks = useSelector((state: RootState) => state.todo.desks)
    const dispatch = useDispatch()
    let [draggableDesk, setDraggableDesk] = useState<IDesk | null>(null)
    let [draggableItem, setDraggableItem] = useState<IDesk | null>(null)
    let desksRef = useRef<HTMLDivElement | null>(null)
    let w = desksRef.current?.scrollWidth || 0
    useEffect(() => {
        dispatch(initialDesks())
    }, [])

    let prevDeskslLength = usePrevious(desks.length) || 0
    useEffect(() => {
        if (desks.length > prevDeskslLength) {
            desksRef.current?.scrollTo({
                top: 0,
                left: w + 300,
                behavior: 'smooth'
            })
        }
    }, [desks.length])

    const addDesk = (title: string) => {
        dispatch(setNewDesk(title))
    }


    return <div className={"todo max-w-7xl mx-auto"}>
        <TitlePage text={"Todo List"}/>
        <div ref={desksRef}
             className="max-h-noScrollFooter min-h-heightItemsInDesk overflow-auto flex items-start grid-cols-4 m-3">
            {
                desks.map(desk => {
                    return <TodoList
                        key={desk.id}
                        idDesk={desk.id}
                        title={desk.name}
                        items={desk.todos}
                    />
                })
            }
            <div className={"border m-2 p-1 bg-gray-100 min-w-[20em] h-full opacity-70 hover:opacity-100"}>
                <div className={"flex justify-between border-b p-1"}>
                    <AddNewItem textBtn={"+ Add desk"} save={addDesk}/>
                </div>
            </div>
        </div>

    </div>
}

export default TodoPage
