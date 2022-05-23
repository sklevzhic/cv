import React, {FC} from "react";


interface TodoItemProps {
    text: string
}

const TodoItem: FC<TodoItemProps> = ({text}) => {
    return <div className={"border flex m-0.5 p-1 bg-white items-center justify-between cursor-pointer hover:bg-gray-100 rounded"}>
        <div >{text}</div>
        <div className={"flex flex-row"}>
            <div>x</div>
            <div>x</div>
        </div>
    </div>
}

export default TodoItem