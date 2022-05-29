import {NextPage} from "next";
import { GetServerSideProps } from "next";
import { resetServerContext } from "react-beautiful-dnd";
import React, {useEffect, useState } from "react";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import TitlePage from "../app/components/TitlePage";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {initialDesks} from "../store/slices/todoSlice";

const DATA = [
    {
        id: 1,
        name: 'todo',
        items: [
            { "title": "см1", "id": 165371746178115,  "completed": false },
            { "title": "см2", "id": 165372746178122,  "completed": false },
            { "title": "см3", "id": 165374746178133,  "completed": false },
            { "title": "см4", "id": 165377546178144,  "completed": false },
        ],
    },
    {
        id: 2,
        name: 'doing',
        items: [
            { "title": "см5", "id": 11653774617815,  "completed": false },
            { "title": "см6", "id": 12653774617812,  "completed": false },
            { "title": "см7", "id": 13653774617813,  "completed": false },
            { "title": "см8", "id": 14653774617814,  "completed": false },
        ],
    },
    {
        id: 3,
        name: 'doing',
        items: [
            { "title": "см5", "id": 116537746178151,  "completed": false },
            { "title": "см6", "id": 126537746178122,  "completed": false },
            { "title": "см7", "id": 136537746178133,  "completed": false },
            { "title": "см8", "id": 146537746178144,  "completed": false },
        ],
    },
    {
        id: 4,
        name: 'completed',
        items: [
            { "title": "см9", "id": 1653774617815,  "completed": false },
            { "title": "см10", "id": 1653774617812,  "completed": false },
            { "title": "см11", "id": 1653774617813,  "completed": false },
            { "title": "см12", "id": 1653774617814,  "completed": false },
        ],
    },
];


const Test: NextPage = () => {
    return (

        <div>
            <TitlePage text={"Todo List"}/>
            <LeadsOverview />
        </div>
    )
}

function LeadsOverview() {
    const desks = useSelector((state: RootState) => state.todo.desks)

    const [groups, setGroups] = useState({});
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(initialDesks())
    }, [])
    useEffect(() => {
        buildAndSave(desks);
    }, []);
    function buildAndSave(items) {
        const groups = {};
        for (let i = 0; i < Object.keys(items).length; ++i) {
            const currentGroup = items[i];
            groups[currentGroup.id] = i;
        }

        setGroups(groups);
    }
    const fff = (result) => {
        // let { destination, draggableId, source, type } = result;
        //
        //
        //
        // if (!destination) {
        //     return;
        // }
        //
        // if (destination.droppableId === source.droppableId && destination.index === source.index) {
        //     return;
        // }
        //
        // if ('group' === type) {
        //     const sourceIndex = source.index;
        //     const targetIndex = destination.index;
        //
        //     const workValue = items.slice();
        //     const [deletedItem, ] = workValue.splice(sourceIndex, 1);
        //     workValue.splice(targetIndex, 0, deletedItem);
        //     buildAndSave(workValue)
        //
        //     return;
        // }
        // const sourceDroppableIndex = groups[source.droppableId.replace("l-", "")];
        // const targetDroppableIndex = groups[destination.droppableId.replace("l-", "")];
        //
        // const sourceItems = items[sourceDroppableIndex].items.slice();
        //
        // const targetItems = source.droppableId !== destination.droppableId ? items[targetDroppableIndex].items.slice() : sourceItems;
        //
        // // Pull the item from the source.
        // const [deletedItem, ] = sourceItems.splice(source.index, 1);
        // targetItems.splice(destination.index, 0, deletedItem);
        //
        // const workValue = items.slice();
        // workValue[sourceDroppableIndex] = {
        //     ...items[sourceDroppableIndex],
        //     items: sourceItems,
        // };
        // workValue[targetDroppableIndex] = {
        //     ...items[targetDroppableIndex],
        //     items: targetItems,
        // };
        //
        //
        // setItems(workValue);
    }

    return (
        <DragDropContext
            onDragEnd={fff}
        >
            <Droppable droppableId='ROOT'  type='group' direction={"horizontal"}>
                {(provided) => (
                    <div className={"flex"}
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
                                    <div className={"m-2 w-[200px] border"}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        ref={provided.innerRef}
                                    >
                                        <DroppableList
                                            key={item.id}
                                            id={item.id}
                                            items={item.todos}
                                            name={item.name}
                                        />
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}

function DroppableList({ id, items, name}) {

    return (
        <Droppable droppableId={"l-" + id} >
            {(provided) => (
                <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                >
                    <div>
                        <div className='holder__title'>
                            {name}
                        </div>
                        <div className='holder__content'>
                            <ul className='list'>
                                {items && items.map((item, index) => {
                                    // debugger
                                    return <li
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
                                                    {item.title}
                                                </div>
                                            )}
                                        </Draggable>
                                    </li>
                                })}
                                {provided.placeholder}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </Droppable>
    );
}

export default Test

export async function getServerSideProps(context) {
    resetServerContext()
    return {props: { data : []}}
}
