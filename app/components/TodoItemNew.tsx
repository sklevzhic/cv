import React, {FC, useState} from "react";
import {MdEdit, MdClose} from "react-icons/md"
import {useDispatch} from "react-redux";
import InputText from "./InputText";
import {changeTitle} from "../../store/slices/todoSlice";

interface TodoItemNewProps {
    text: string,
    setText: () => void,
    size?: string,
    handlerEdit: () => void,
    close?: () => void,
    save?: () => void,
    edit: () => void,
}

const TodoItemNew: FC<TodoItemNewProps> = ({text, edit}) => {


    return <>   df </>
}

export default TodoItemNew