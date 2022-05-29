import React, {FC, useEffect, useRef, useState} from "react"
import {useDispatch} from "react-redux";
import {initialDesks, moveItem, removeDesk, setNewDesk} from "../../store/slices/todoSlice";
import { IDesk } from "../models/ITodo";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import AddNewItem from "./AddNewItem";
import DroppableList from "./DraggableList";
import { usePrevious } from "../hooks/usePrevious";

interface DesksProps {
    desks: IDesk[]
}

const Desks: FC<DesksProps> = ({desks}) => {
    const dispatch = useDispatch()
    let desksRef = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        dispatch(initialDesks())
    }, [])

    useEffect(() => {
        buildAndSave(desks);
    }, [desks]);

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

    const [groups, setGroups] = useState({});
    function buildAndSave(items: IDesk[]) {
        const groups = {};
        for (let i = 0; i < Object.keys(items).length; ++i) {
            const currentGroup = items[i];
            // @ts-ignore
            groups[currentGroup.id] = i;
        }

        setGroups(groups);
    }

    const handlerDrag = (result: any) => {
        let { destination, source, type } = result;
        if (!destination) return;
        if (destination.droppableId === source.droppableId && destination.index === source.index) return;

        if ('group' === type) {
            const sourceIndex = source.index;
            const targetIndex = destination.index;
            const workValue = desks.slice();
            const [deletedItem, ] = workValue.splice(sourceIndex, 1);
            workValue.splice(targetIndex, 0, deletedItem);
            dispatch(moveItem(workValue));
            return;
        }
        // @ts-ignore
        const sourceDroppableIndex = groups[source.droppableId.replace("l-", "")];
        // @ts-ignore
        const targetDroppableIndex = groups[destination.droppableId.replace("l-", "")];

        const sourceItems = desks[sourceDroppableIndex].todos.slice();

        const targetItems = source.droppableId !== destination.droppableId ? desks[targetDroppableIndex].todos.slice() : sourceItems;

        const [deletedItem, ] = sourceItems.splice(source.index, 1);
        targetItems.splice(destination.index, 0, deletedItem);

        const workValue = desks.slice();
        workValue[sourceDroppableIndex] = {
            ...desks[sourceDroppableIndex],
            todos: sourceItems,
        };
        workValue[targetDroppableIndex] = {
            ...desks[targetDroppableIndex],
            todos: targetItems,
        };
        dispatch(moveItem(workValue));
    }

    return (
        <DragDropContext onDragEnd={handlerDrag} >
            <Droppable droppableId='ROOT'  type='group' direction={"horizontal"}>
                {(provided) => (
                    <div className={"max-h-noScrollFooter min-h-heightItemsInDesk overflow-auto"} ref={desksRef}>
                        <div
                            className="flex items-start grid-cols-4 m-3 "
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {desks && desks.map((desk, index) => (
                                <Draggable
                                    draggableId={"d-" + desk.id}
                                    key={desk.id}
                                    index={index}
                                >
                                    {(provided) => (
                                        <div {...provided.draggableProps}
                                             {...provided.dragHandleProps}
                                             ref={provided.innerRef}
                                        >
                                            <DroppableList
                                                key={desk.id}
                                                id={desk.id}
                                                items={desk.todos}
                                                name={desk.name}
                                            />
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            <div className={"border m-2 p-1 bg-gray-100 min-w-[20em] h-full opacity-70 hover:opacity-100"}>
                                <div className={"flex justify-between border-b p-1"}>
                                    <AddNewItem textBtn={"+ Add desk"} save={addDesk}/>
                                </div>
                            </div>
                            {provided.placeholder}
                        </div>
                    </div>

                )}
            </Droppable>
        </DragDropContext>

    )
}

export default Desks
