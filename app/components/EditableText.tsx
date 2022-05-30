import React, {FC, useRef, useState} from "react";
import {useClickOutside} from "../hooks/useClickOutside";
import {IType} from "../models/ITypeInput";

interface EditableTextProps {
    TextComponent: any
    EditComponent: any,
    type?: IType,
    value: string,
    textButton: string,
    save?: (t: string) => void,
    btnAgree?: string
}

const EditableText: FC<EditableTextProps> = ({TextComponent, EditComponent, type, save, textButton, value, btnAgree}) => {
    const outsideRef = useRef(null)
    let [text, setText] = useState<string>(value)
    const handlerSaveText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }
    let [editable, setEditable] = useState<boolean>(false)

    const handlerSave = () => {
        save && save(text)
        setText("")

        if (type === IType.titleList) {
            setText(value)
            setEditable(false)
        }

    }
    const handlerClose = () => { }
    const handlerEdit = () => {
        setEditable(true)
    }

    const handleClickOutside = () => {

    }
    useClickOutside(outsideRef, handleClickOutside)

    return <div>

        {
            editable
                ? <div ref={outsideRef} className={"hover:bg-gray-200 w-full rounded mt-1 p-0.5"}>
                    <EditComponent text={text} setText={handlerSaveText} type={type} save={handlerSave} close={handlerClose}  btnAgree={btnAgree}/>
                </div>
                : <div className={"hover:bg-gray-200 w-full rounded mt-1 p-0.5"}>
                    <TextComponent textButton={textButton} text={text} type={type} edit={handlerEdit} save={handlerSave} close={handlerClose} />
                </div>
        }

    </div>
}

export default EditableText