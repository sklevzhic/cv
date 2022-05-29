import {NextPage} from "next";
import TitlePage from "../app/components/TitlePage";
import React, {useEffect, useRef, useState} from "react";
import TodoList from "../app/components/TodoList";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import AddNewItem from "../app/components/AddNewItem";
import {setNewDesk, initialDesks, moveItem} from "../store/slices/todoSlice";
import {usePrevious} from "../app/hooks/usePrevious";
import {DragDropContext, Draggable, Droppable, DropResult} from "react-beautiful-dnd";
import Test from "../app/components/Test";
import {IDesk, ITodo} from "../app/models/ITodo";

const tasks = [
    {id: "1", content: "First task"},
    {id: "2", content: "Second task"},
    {id: "3", content: "Third task"},
    {id: "4", content: "Fourth task"},
    {id: "5", content: "Fifth task"}
];

const taskStatus = {
    requested: {
        name: "Requested",
        items: tasks
    },
    toDo: {
        name: "To do",
        items: []
    },
    inProgress: {
        name: "In Progress",
        items: []
    },
    done: {
        name: "Done",
        items: []
    }
};

const onDragEnd = (res: any) => {
    console.log(res)
};

const TodoPage: NextPage = () => {
    const desks = useSelector((state: RootState) => state.todo.desks)

    let desksRef = useRef<HTMLDivElement | null>(null)
    let w = desksRef.current?.scrollWidth || 0
    const dispatch = useDispatch()
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



    // function move() {
    //
    // }
    function onDragEnd(result: DropResult): void {
        // if (!result.destination) {
        //     return;
        // }
        // let deskOld = +result.source.droppableId.replace("d-","")
        // let idItem = +result.source.index
        // let deskNew = +result.destination.droppableId.replace("d-","")
        // let position = +result.destination.index
        //
        // dispatch(moveItem({deskOld, idItem, deskNew, position}))
        // ---------
        // const { destination, draggableId, source, type, } = result;
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
        //
        // const sourceDroppableIndex = groups[source.droppableId];
        // const targetDroppableIndex = groups[destination.droppableId];
        // const sourceItems = items[sourceDroppableIndex].items.slice();
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

    return <div className={"todo max-w-7xl mx-auto"}>

        <TitlePage text={"Todo List"}/>
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId='ROOT' direction="horizontal">
                {(provided) => (
                    <div className="max-h-noScrollFooter min-h-heightItemsInDesk overflow-auto flex items-start grid-cols-4 m-3"
                         {...provided.droppableProps}
                         ref={provided.innerRef}
                    >
                        {desks.map((desk, index) => (
                            <Draggable
                                draggableId={"d-" + desk.id}
                                key={desk.id}
                                index={index}
                            >
                                {(provided) => (
                                    <div
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        ref={provided.innerRef}
                                    >
                                        <TodoList
                                            idDesk={desk.id}
                                            title={desk.name}
                                            items={desk.todos}
                                        />
                                    </div>
                                )}
                            </Draggable>
                        ))}
                    </div>
                )}
            </Droppable>
            {/*    {*/}
            {/*        desks.map(desk => {*/}
            {/*            return <Droppable key={desk.id} droppableId={"d-" + desk.id} type="DESK">*/}
            {/*                {(provided, snapshot) => (*/}
            {/*                    <div ref={provided.innerRef}*/}
            {/*                         key={desk.id}*/}
            {/*                         {...provided.droppableProps}*/}
            {/*                    >*/}
            {/*                        <TodoList*/}
            {/*                            idDesk={desk.id}*/}
            {/*                            title={desk.name}*/}
            {/*                            items={desk.todos}*/}
            {/*                        />*/}
            {/*                    </div>*/}
            {/*                )}*/}
            {/*            </Droppable>;*/}
            {/*        })*/}
            {/*    }*/}

            {/*</div>*/}

        </DragDropContext>
    </div>
}


export default TodoPage

