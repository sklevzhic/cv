import React, {FC, Fragment} from "react";
import {MdClose, MdOutlineMoreVert} from "react-icons/md"
import EditableText from "./EditableText";
import Text from "./Text";
import Input from "./Input";
import {IType} from "../models/ITypeInput";
import {Popover, Transition} from "@headlessui/react";
import {Marks} from "../models/ITodo";
import {useDispatch} from "react-redux";

interface TodoItemProps {
    text: string,
    deleteItem: () => void,
    changeTitleTodo: (t: string) => void
    addMark: (v: Marks) => void,
    marks: Marks[] | undefined
}

const TodoItem: FC<TodoItemProps> = ({text, deleteItem, changeTitleTodo, addMark, marks}) => {
    const dispatch = useDispatch()
    const changeTitle = (text: string) => changeTitleTodo(text)

    function isSelectMark(mark: Marks) {
        if (marks?.includes(mark)) {
            return true
        }
        return false
    }

    return <div
        className={"border h-auto  flex m-0.5 p-1 bg-white items-center " +
            "justify-between cursor-pointer hover:bg-gray-200 rounded"}>
        <div className={"basis-5.5/6 overflow-hidden flex flex-col pr-1"}>
            <div className={"flex flex-row flex-wrap"}>
            {
                marks && marks.map((mark ) => {
                    // @ts-ignore
                    return <div key={mark} className={Marks[mark] + " rounded w-5 mr-1 h-1 mb-0.5"}></div>
                })
            }
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

        <div className={"basis-0.5/6 flex flex-row"}>
            <div className={"relative"}>
                <Popover className="">
                    {({open}) => (
                        <div data-container="body">
                            <Popover.Button className={`${open ? '' : 'text-opacity-90'}`}>
                                <MdOutlineMoreVert className={"opacity-40 hover:opacity-100"}/>
                            </Popover.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel
                                    className="absolute bg-white min-w-[10em] max-w-[12em] p-1 z-10 -translate-x-full translate-y-2 rounded-lg
                                     shadow-lg ring-1 ring-black ring-opacity-5">
                                    <div
                                        className="overflow-hidden">
                                        {/*<div className={"flex items-center border-b p-0.5 hover:bg-gray-100"}> <GrTextAlignFull className={"opacity-40 hover:opacity-100 mr-1 "}/>Открыть  </div>*/}
                                        <div className={"flex items-center border-b p-0.5 hover:bg-gray-100"}
                                             onClick={deleteItem}>
                                            <MdClose className={"opacity-40 hover:opacity-100 mr-1"}/> Удалить
                                        </div>
                                        <div className={"flex flex-col  border-b p-0.5 hover:bg-gray-100"}>
                                            <div className={"flex items-center"}><MdClose
                                                className={"opacity-40 hover:opacity-100 mr-1"}/> Метки
                                            </div>
                                            <div className={"flex flex-row flex-wrap"}>
                                                {
                                                    (Object.keys(Marks) as Marks[]).map((key) => {
                                                        let style = (isSelectMark(key)) ? " border-4 border-gray-400 " : " border-gray-400 "
                                                        // @ts-ignore
                                                        let classN = "shrink-0 " + Marks[key] + style + " rounded w-5 mr-1 h-4 mb-1"

                                                        return <div
                                                            key={key}
                                                            className={classN}
                                                            // @ts-ignore
                                                            onClick={() => addMark(key)}

                                                        ></div>
                                                    })
                                                }

                                            </div>
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </div>
                    )}
                </Popover>
            </div>

        </div>

    </div>
}

export default TodoItem