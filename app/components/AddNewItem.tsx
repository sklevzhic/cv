import React, {FC, useRef, useState} from "react";
import {CgClose} from "react-icons/cg"
import cn from "classnames"
import {useClickOutside} from "../hooks/useClickOutside";
import {isEmpty} from "../utils/isEmpty";
import {useDispatch} from "react-redux";
import {setTodo} from "../../store/slices/todoSlice";
import InputText from "./InputText";


interface AddNewItemProps {
    idDesk: number
}

const AddNewItem: FC<AddNewItemProps> = ({idDesk}) => {
    const dispatch = useDispatch()


    let [text, setText] = useState<string>("")
    let [editable, setEditable] = useState<boolean>(false)

    const handleTextInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value)
    }
    const addTodo = () => {
        dispatch(setTodo({idDesk, text}))
        setEditable(!editable)
        setText("")
    }
    const handleClickOutside = () => {

        if (isEmpty(text)) {
            setEditable(false)
            setText("")
        } else {
            dispatch(setTodo({idDesk, text}))
            setEditable(false)
            setText("")
        }
    }
    const handleEditable = () => {
        setEditable(!editable)
        setText("")
    }

    return <div className={"hover:bg-gray-200 rounded mt-1 p-0.5"}>
        {
            editable
                ? <InputText
                    text={text}
                    btnText={"Добавить"}
                    handlerText={handleTextInput}
                    handlerClose={() => setEditable(!editable)}
                    handleClickOutside={handleClickOutside}
                    handlerSave={addTodo}
                />
                : <div className={"cursor-pointer"} onClick={handleEditable}>+ Добавить карточку</div>
        }
    </div>
}

export default AddNewItem