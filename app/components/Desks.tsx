import React, {FC, useEffect, useState} from "react"
import {useDispatch} from "react-redux";
import {initialDesks, moveItem, setNewDesk} from "../../store/slices/todoSlice";
import { IDesk } from "../models/ITodo";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import AddNewItem from "./AddNewItem";
import DroppableList from "./DraggableList";

interface DesksProps {
    desks: IDesk[]
}

const Desks: FC<DesksProps> = ({desks}) => {
    const [groups, setGroups] = useState({});
    const dispatch = useDispatch()
    const addDesk = (title: string) => {
        dispatch(setNewDesk(title))
    }
    useEffect(() => {
        dispatch(initialDesks())
    }, [])
    useEffect(() => {
        buildAndSave(desks);
    }, [desks]);
    function buildAndSave(items: IDesk[]) {
        const groups = {};
        for (let i = 0; i < Object.keys(items).length; ++i) {
            const currentGroup = items[i];
            groups[currentGroup.id] = i;
        }

        setGroups(groups);
    }
    const fff = (result :any) => {
        let { destination, source, type } = result;

        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }

        if ('group' === type) {

            const sourceIndex = source.index;
            const targetIndex = destination.index;

            const workValue = desks.slice();
            const [deletedItem, ] = workValue.splice(sourceIndex, 1);
            workValue.splice(targetIndex, 0, deletedItem);
            dispatch(moveItem(workValue));
            // buildAndSave(workValue)

            return;
        }
        const sourceDroppableIndex = groups[source.droppableId.replace("l-", "")];
        const targetDroppableIndex = groups[destination.droppableId.replace("l-", "")];

        const sourceItems = desks[sourceDroppableIndex].todos.slice();

        const targetItems = source.droppableId !== destination.droppableId ? desks[targetDroppableIndex].todos.slice() : sourceItems;

        // Pull the item from the source.
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
        <DragDropContext onDragEnd={fff} >
            <Droppable droppableId='ROOT'  type='group' direction={"horizontal"}>
                {(provided) => (
                    <div className="max-h-noScrollFooter min-h-heightItemsInDesk overflow-auto flex items-start grid-cols-4 m-3"
                         {...provided.droppableProps}
                         ref={provided.innerRef}
                    >
                        {desks && desks.map((item, index) => (
                            <Draggable
                                draggableId={"d-" + item.id}
                                key={item.id}
                                index={index}
                            >
                                {(provided) => (
                                    <div {...provided.draggableProps}
                                         {...provided.dragHandleProps}
                                         ref={provided.innerRef}
                                    >
                                        <DroppableList
                                            key={item.id}
                                            id={item.id}
                                            deskId={item.id}
                                            items={item.todos}
                                            name={item.name}
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
                )}
            </Droppable>
        </DragDropContext>

    )
}

export default Desks
