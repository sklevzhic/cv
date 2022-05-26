import React, {FC, useRef, useState} from "react";
import {CgClose} from "react-icons/cg"
import cn from "classnames"
import {useClickOutside} from "../hooks/useClickOutside";
import {isEmpty} from "../utils/isEmpty";
import {useDispatch} from "react-redux";
import {setTodo} from "../../store/slices/todoSlice";
import InputText from "./InputText";


interface AddNewItemProps {
    textBtn: string,
    save: (t: string) => void,
}

const AddNewItem: FC<AddNewItemProps> = ({textBtn, save}) => {
    let [text, setText] = useState<string>("")
    let [editable, setEditable] = useState<boolean>(false)

    const handleTextInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)
    const handlerSave = () => {
        setEditable(false)
        save(text)
        setText("")
        setEditable(true)
    }
    const handleClickOutside = () => {
        if (isEmpty(text)) {
            setEditable(false)
            setText("")
        } else {
            save(text)
            setEditable(false)
            setText("")
        }
    }
    const handleEditable = (e: any) => {
        setEditable(!editable)

    }

    return <div className={"hover:bg-gray-200 w-full rounded mt-1 p-0.5"}>
        {
            editable
                ? <InputText
                    text={text}
                    btnText={"Добавить"}
                    handlerText={handleTextInput}
                    handlerClose={() => setEditable(!editable)}
                    handleClickOutside={handleClickOutside}
                    handlerSave={handlerSave}
                />
                : <div className={"cursor-pointer"} onClick={handleEditable}>{textBtn}</div>
        }
    </div>
}

export default AddNewItem