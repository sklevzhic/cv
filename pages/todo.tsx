import {NextPage} from "next";
import TitlePage from "../app/components/TitlePage";
import React, {useEffect, useState} from "react";
import TodoList from "../app/components/TodoList";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import AddNewItem from "../app/components/AddNewItem";
import {setNewDesk, initialDesks} from "../store/slices/todoSlice";
import {IDesk, ITodo} from "../app/models/ITodo";

const TodoPage: NextPage = () => {
    const desks = useSelector((state: RootState) => state.todo.desks)

    const dispatch = useDispatch()
    let [draggableDesk, setDraggableDesk] = useState<IDesk | null>(null)
    let [draggableItem, setDraggableItem] = useState<IDesk | null>(null)
    useEffect(() => {
        dispatch(initialDesks())
    }, [])

    const addDesk = (title: string) => {
        dispatch(setNewDesk(title))
    }



    const dragStartHandler = (e: React.DragEvent<HTMLDivElement>, desk: IDesk) => {
        setDraggableDesk(desk)
    }

    const dragEndHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.currentTarget.classList.remove("border-indigo-500")
        e.currentTarget.classList.remove("border-l-4")
    }
    const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        if (e.currentTarget.className == "desk") {
            e.currentTarget.classList.add("border-l-4")
            e.currentTarget.classList.add("border-indigo-500")
        }

    }
    const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.currentTarget.classList.remove("border-indigo-500")
        e.currentTarget.classList.remove("border-l-4")
    }

    const onDropHandler = (e: React.DragEvent<HTMLDivElement>, desk: IDesk) => {
        e.preventDefault()

        // let currentIndex = draggableDesk ? desks.indexOf(draggableDesk) : -1
        // let items = desks.splice(currentIndex, 1)[0]
        // let currentDroggableIndex = draggableDesk ? desks.indexOf(desk) : -1
        //
        // let a = desks.map(board => {
        //     if (board.id === desk.id) {
        //         return board
        //     }
        //     if (board.id === items.id) {
        //         return items
        //     }
        //     return board
        // })

    }

    return <div className={"todo max-w-7xl mx-auto"}>
        <TitlePage text={"Todo List"}/>
        <div className="max-h-noScrollFooter min-h-heightItemsInDesk overflow-auto flex items-start grid-cols-4 m-3">
            {
                desks.map(desk => {
                    return <div key={desk.id}
                                className={""}
                                onDragStart={(e) => dragStartHandler(e, desk)}
                                onDragLeave={(e) => dragLeaveHandler(e)}
                                onDragEnd={(e) => dragEndHandler(e)}
                                onDragOver={(e) => dragOverHandler(e)}
                                onDrop={(e) => onDropHandler(e, desk)}
                                draggable={true}>
                        <TodoList
                            idDesk={desk.id}
                            title={desk.name}
                            items={desk.todos}
                        />
                    </div>
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
