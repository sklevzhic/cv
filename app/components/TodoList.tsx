import React, {FC, useEffect, useRef} from "react";
import TodoItem from "./TodoItem";
import {IDesk, ITodo} from "../models/ITodo";
import AddNewItem from "./AddNewItem";
import {useDispatch} from "react-redux";
import {removeTodo, removeDesk, setTodo} from "../../store/slices/todoSlice";
import {MdClose} from "react-icons/md"
import {usePrevious} from "../hooks/usePrevious";
import {Draggable, Droppable} from "react-beautiful-dnd";

interface TodoListProps {
    idDesk: number
    title: string,
    items: ITodo[],
}

const TodoList: FC<TodoListProps> = ({title, items, idDesk}) => {
    const dispatch = useDispatch()
    const heightDiv = useRef<HTMLDivElement | null>(null)
    const scrollHeight = heightDiv.current?.scrollHeight
    let prevItemslLength = usePrevious(items.length) || 0

    useEffect(() => {
        if (items.length > prevItemslLength)
            heightDiv.current?.scrollTo({top: scrollHeight, behavior: 'smooth'})
    }, [items])

    const deleteTodoItem = (id: number) => {
        dispatch(removeTodo({idDesk, id}))
    }
    return <div className={"border m-2 p-1 w-[16em] shrink-0 bg-gray-100"}>

        <div ref={heightDiv} className={"text-left flex flex-col max-h-heightItemsInDesk overflow-auto "}>
            <DroppableList todos={items} key={idDesk} id={idDesk} name={title} />
        </div>

    </div>
}

const DroppableList = ({ id, todos, name }: IDesk) => {
    return (
        <Droppable droppableId={"i-" + id}>
            {(provided) => (
                <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                >
                    <div>
                        <div>
                            <ul>
                                {todos && todos.map((todo, index) => (
                                    <li key={todo.id}
                                    >
                                        <Draggable
                                            draggableId={"i--" + todo.id}
                                            index={index}
                                        >
                                            {(provided) => (
                                                <div
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    ref={provided.innerRef}
                                                >
                                                    <TodoItem text={todo.title} id={todo.id} deleteTodoItem={() => deleteTodoItem(todo.id)}/>
                                                </div>
                                            )}
                                        </Draggable>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </Droppable>
    );
}

export default TodoList