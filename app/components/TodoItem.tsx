import React, {FC, useState} from "react";
import { Dialog } from '@headlessui/react'

interface TodoItemProps {
    text: string
}

const TodoItem: FC<TodoItemProps> = ({text}) => {

    return <div className={"border flex m-0.5 p-1 bg-white items-center justify-between cursor-pointer hover:bg-gray-100 rounded"}>
        <div>
            <div className={"flex flex-row"}>
                <div className={"bg-emerald-300 rounded w-5 mr-1 h-1"}></div>
                <div className={"bg-yellow-300 rounded w-5 mr-1 h-1"}></div>
                <div className={"bg-red-300 rounded w-5 mr-1 h-1"}></div>
            </div>
            <div>{text}</div>
        </div>
        <div className={"flex flex-row"}>
            <div>x</div>
            <div>x</div>
        </div>

    </div>
}

export default TodoItem