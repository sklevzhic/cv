import React, {FC, useRef, useState} from "react";
import {CgClose} from "react-icons/cg"
import cn from "classnames"
import { useClickOutside } from "../hooks/useClickOutside";


interface AddNewItemProps {

}

const AddNewItem: FC<AddNewItemProps> = ({}) => {
    let [text, setText] = useState<string>("")
    let [editable, setEditable] = useState<boolean>(false)
    let outsideRef = useRef(null)
    
    const handleEditable = () => {
        setEditable(!editable)
    }
    const addTodo = () => {
        setEditable(!editable)
        setText("")
    }
    const handleTextInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value)
    }
    const handleClickOutside = () => {
        console.log("out")
    }
    useClickOutside(outsideRef, handleClickOutside)
    
    return <div className={"hover:bg-gray-200 rounded mt-1 p-0.5"}>

        {
            editable
                ? <div >
                    <textarea ref={outsideRef} value={text} onChange={handleTextInput}
                              className={cn("form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300" +
                                  "                       rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-lime-600 focus:outline-none")}></textarea>
                    <div className={"flex flex-row items-center"}>
                        <button onClick={addTodo} disabled={!text}
                                className={cn("inline-flex text-white mt-1 bg-lime-500 border-0 py-1 px-4 focus:outline-none hover:bg-lime-600 rounded text-lg mr-1")}>Add
                        </button>
                        <CgClose onClick={handleEditable} size={"1.5em"} color={"#424242"}/>
                    </div>

                </div>
                : <div className={"cursor-pointer"} onClick={handleEditable}>+ Добавить карточку</div>
        }
    </div>
}

export default AddNewItem