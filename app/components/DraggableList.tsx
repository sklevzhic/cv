import React, {FC, useEffect, useState} from "react"
import {useDispatch} from "react-redux";
import {initialDesks, setNewDesk, setTodo} from "../../store/slices/todoSlice";
import { IDesk, ITodo } from "../models/ITodo";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import AddNewItem from "./AddNewItem";
import {MdClose} from "react-icons/md";
import TodoItem from "./TodoItem";

interface DroppableListProps {
    id: number,
    items: ITodo[],
    name: string,
    deskId: number
}

const DroppableList: FC<DroppableListProps> = ({ id, items, name, deskId}) => {
    const dispatch = useDispatch()
    const addTodoItem = (text: string) => {
        // @ts-ignore
        dispatch(setTodo({deskId, text}))
    }
    return (
        <Droppable droppableId={"l-" + id} >
            {(provided) => (
                <div className={"border m-2 p-1 w-[16em] shrink-0 bg-gray-100"}
                     {...provided.droppableProps}
                     ref={provided.innerRef}
                >
                    <div>
                        <div className={"flex justify-between border-b p-1 items-center"}>
                            <div className={"basis-4/6 font-semibold overflow-hidden"}> {name}

                            </div>
                            {!!items.length && <div className={"basis-1.5/6 text-sm text-lime-700"}>({items.length} шт.)</div>}
                            <MdClose onClick={() => "handlerRemoveDesk"} className={"basis-0.5/6 opacity-40 hover:opacity-100"}/>
                        </div>
                        <div className={"text-left flex flex-col max-h-heightItemsInDesk overflow-auto"}>
                            <ul className='list'>
                                {items && items.map((item, index) => {
                                    // debugger
                                    return <div
                                        className='list__item'
                                        key={item.id}
                                    >
                                        <Draggable
                                            draggableId={"i-" + item.id}
                                            index={index}
                                        >
                                            {(provided) => (
                                                <div
                                                    className='card'
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    ref={provided.innerRef}
                                                >
                                                    <TodoItem idDesk={deskId} text={item.title} id={item.id} deleteTodoItem={() => "deleteTodoItem(todo.id)"}/>
                                                </div>
                                            )}
                                        </Draggable>
                                    </div>
                                })}
                                {provided.placeholder}
                                <AddNewItem save={addTodoItem} textBtn={"+ Add card"}/>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </Droppable>

    )
}

export default DroppableList
