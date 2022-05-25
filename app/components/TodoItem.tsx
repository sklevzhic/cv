import React, {FC, useState} from "react";
import {MdEdit, MdClose} from "react-icons/md"
import {useDispatch} from "react-redux";
import InputText from "./InputText";
import {changeTitle} from "../../store/slices/todoSlice";

interface TodoItemProps {
    text: string,
    deleteTodoItem: () => void,
    idDesk: number,
    id: number
}

const TodoItem: FC<TodoItemProps> = ({text, deleteTodoItem, idDesk, id}) => {
    const dispatch = useDispatch()

    const [editable, setEditable] = useState(false)
    const [textInput, setTextInput] = useState(text)

    const handlerTextInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextInput(e.target.value)
    }

    const changeTitleTodo = () => {
        dispatch(changeTitle({idDesk, id, title: textInput}))
        setEditable(false)
    }


    return <>
        {
            editable
                ? <InputText text={textInput}
                             btnText={"Сохранить"}
                             handlerText={handlerTextInput}
                             handlerSave={changeTitleTodo}
                             handlerClose={() => setEditable(false)}
                             handleClickOutside={() => setEditable(false)}
                />
                : <div
                    className={"border flex m-0.5 p-1 bg-white items-center justify-between cursor-pointer hover:bg-gray-100 rounded"}>
                    <div>
                        <div className={"flex flex-row"}>
                            <div className={"bg-emerald-300 rounded w-5 mr-1 h-1"}></div>
                            <div className={"bg-yellow-300 rounded w-5 mr-1 h-1"}></div>
                            <div className={"bg-red-300 rounded w-5 mr-1 h-1"}></div>
                        </div>
                        <div>{text}</div>
                    </div>
                    <div className={"flex flex-row"}>
                        <MdEdit className={"opacity-40 hover:opacity-100 "} onClick={() => setEditable(!editable)}/>
                        <MdClose className={"opacity-40 hover:opacity-100"} onClick={deleteTodoItem}/>
                    </div>

                </div>
        }
    </>
}

export default TodoItem