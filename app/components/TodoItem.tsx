import React, {FC} from "react";
import { MdClose } from "react-icons/md"
import { GrTextAlignFull } from "react-icons/gr"
import EditableText from "./EditableText";
import Text from "./Text";
import Input from "./Input";
import {IType} from "../models/ITypeInput";

interface TodoItemProps {
    text: string,
    deleteItem: () => void,
    changeTitleTodo: (t:string) => void
}

const TodoItem: FC<TodoItemProps> = ({text, deleteItem, changeTitleTodo}) => {
    const changeTitle = (text: string) => changeTitleTodo(text)

    return <div
        className={"border h-auto  flex m-0.5 p-1 bg-white items-center " +
            "justify-between cursor-pointer hover:bg-gray-100 rounded"}>
        <div className={"basis-5/6 shrink-0 overflow-hidden flex flex-col pr-1"}>
            <div className={"flex flex-row"}>
                <div className={"bg-emerald-300 rounded w-5 mr-1 h-1"}></div>
                <div className={"bg-yellow-300 rounded w-5 mr-1 h-1"}></div>
                <div className={"bg-red-300 rounded w-5 mr-1 h-1"}></div>
            </div>
            <EditableText
                TextComponent={Text}
                EditComponent={Input}
                type={IType.updateItem}
                value={text} textButton={text}
                btnAgree={"Обновить"}
                save={changeTitle}
            />
        </div>

        <div className={"basis-1/6 flex flex-row"}>
            <GrTextAlignFull className={"opacity-40 hover:opacity-100 "} />
            <MdClose className={"opacity-40 hover:opacity-100"} onClick={deleteItem}/>
        </div>

    </div>
}

export default TodoItem