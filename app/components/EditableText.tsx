import React, {FC, useRef, useState} from "react";
import {useClickOutside} from "../hooks/useClickOutside";
import {IType} from "../models/ITypeInput";
import {ITodo} from "../models/ITodo";

interface EditableTextProps {
    TextComponent: any
    EditComponent: any,
    type?: IType,
    value: string,
    textButton: string,
    save?: (t: string) => void,
    btnAgree?: string,
    item?: ITodo
}

const EditableText: FC<EditableTextProps> = ({
                                                 TextComponent,
                                                 EditComponent,
                                                 type,
                                                 save,
                                                 textButton,
                                                 value,
                                                 btnAgree,
                                                 item
                                             }) => {

    const outsideRef = useRef(null)
    let [editable, setEditable] = useState<boolean>(false)
    let [text, setText] = useState<string>(value)

    const handlerSaveText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const handlerSave = () => {
        if (text.trim() === "") {
            setEditable(false)
        } else {
            save && save(text)
            setEditable(false)
            if (type === IType.newItem) setText(""), setEditable(true)
            if (type === IType.newList) setText(""), setEditable(true)
        }
    }

    const handlerClose = () => {
        setEditable(false)
        if (type === IType.newItem) setText("")
        if (type === IType.newList) setText("")
        if (type === IType.updateItem) setText(value)
        if (type === IType.titleList) setText(value)
    }

    const handlerEdit = () => {
        setEditable(true)
    }

    const handleClickOutside = () => {
        if (value === text) {
            setEditable(false)
        } else {
            setEditable(false)
            save && save(text)
            if (type === IType.newItem) setText("")
            if (type === IType.newList) setText("")
        }
    }
    useClickOutside(outsideRef, handleClickOutside)

    return <div>

        {
            editable
                ? <div ref={outsideRef} className={"hover:bg-gray-200 w-full rounded mt-1 p-0.5"}>
                    <EditComponent text={text} setText={handlerSaveText} type={type} save={handlerSave} close={handlerClose}
                                   btnAgree={btnAgree}/>
                </div>
                : <div>
                    <TextComponent item={item} textButton={textButton} text={text} type={type} edit={handlerEdit}
                                   save={handlerSave}
                                   close={handlerClose}/>
                </div>
        }

    </div>
}

export default EditableText