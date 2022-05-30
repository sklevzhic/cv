import React, {FC, useEffect, useRef} from "react"
import {useDispatch} from "react-redux";
import {changeTitle, changeTitleDesk, removeDesk, removeTodo, setTodo} from "../../store/slices/todoSlice";
import {ITodo} from "../models/ITodo";
import {Draggable, Droppable} from "react-beautiful-dnd";
import {MdClose, MdEdit} from "react-icons/md";
import {usePrevious} from "../hooks/usePrevious";
import Text from "./Text";
import Input from "./Input";
import EditableText from "./EditableText";
import {IType} from "../models/ITypeInput";
import TodoItemNew from "./TodoItemNew";
import TodoItem from "./TodoItem";

interface DroppableListProps {
    id: number,
    items: ITodo[],
    name: string,
}

const DroppableList: FC<DroppableListProps> = ({id, items, name}) => {

    const dispatch = useDispatch()

    const addTodoItem = (text: string) => dispatch(setTodo({id, text}))
    const handlerRemoveDesk = () => dispatch(removeDesk(id))

    const deleteTodoItem = (idTodo: number) => dispatch(removeTodo({idDesk: id, idTodo: idTodo}))

    const heightDiv = useRef<HTMLDivElement | null>(null)
    const scrollHeight = heightDiv.current?.scrollHeight
    let prevItemslLength = usePrevious(items.length) || 0

    useEffect(() => {
        if (items.length > prevItemslLength)
            heightDiv.current?.scrollTo({top: scrollHeight, behavior: 'smooth'})
    }, [items])

    const saveTitle = (text: string) => {
        dispatch(changeTitleDesk({idDesk: id, title: text}))
    }

    const changeTitleTodo = (title: string, idTodo: number) => {
        dispatch(changeTitle({idDesk: id, id: idTodo, title: title}))
    }

    return (
        <Droppable droppableId={"l-" + id}>
            {(provided) => (
                <div className={"border m-2 p-1 w-[16em] shrink-0 bg-gray-100"}
                     {...provided.droppableProps}
                     ref={provided.innerRef}
                >
                    <div className={"flex justify-between border-b p-1 items-center"}>

                        <div className={"basis-4/6 shrink-0 overflow-hidden"}>
                            <EditableText TextComponent={Text} EditComponent={Input} type={IType.titleList}
                                          save={saveTitle}
                                          value={name} textButton={name} btnAgree={"Добавить"}/>
                        </div>

                        {!!items.length &&
                            <div className={"basis-1.5/6 text-sm text-lime-700"}>({items.length} шт.)</div>}
                        <MdClose onClick={handlerRemoveDesk}
                                 className={"basis-0.5/6 cursor-pointer opacity-40 hover:opacity-100"}/>
                    </div>
                    <div ref={heightDiv} className={"text-left flex flex-col max-h-heightItemsInDesk overflow-auto"}>
                        <ul className='list'>
                            {items && items.map((item, index) => {
                                // debugger
                                return <div key={item.id}>

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
                                                <TodoItem
                                                    text={item.title}
                                                    changeTitleTodo={(t) => changeTitleTodo(t, item.id)}
                                                    deleteItem={() => deleteTodoItem(item.id)}
                                                />
                                            </div>
                                        )}
                                    </Draggable>
                                </div>
                            })}
                            {provided.placeholder}

                        </ul>
                    </div>
                    <EditableText TextComponent={Text} EditComponent={Input} value={""} type={IType.newItem}
                                  textButton={"+ Add card"} save={addTodoItem} btnAgree={"Добавить"}/>
                </div>
            )}
        </Droppable>

    )
}

export default DroppableList
