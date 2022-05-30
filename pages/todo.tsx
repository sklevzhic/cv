import {NextPage} from "next";
import {resetServerContext} from "react-beautiful-dnd";
import React, {useState} from "react";

import TitlePage from "../app/components/TitlePage";
import {useSelector} from "react-redux";
import {RootState} from "../store";
import Text from "../app/components/Text"

import Desks from "../app/components/Desks";
import EditableText from "../app/components/EditableText";
import Input from "../app/components/Input";

import TodoItemNew from "../app/components/TodoItemNew";

const Test: NextPage = () => {
    const desks = useSelector((state: RootState) => state.todo.desks)

    return (
        <div className={"todo"}>
            <TitlePage text={"Todo List"}/>
            {/*<EditableText TextComponent={Text} EditComponent={Input} textButton={"+ Добавить"} value={"text"} />*/}
            {/*<EditableText TextComponent={Text} EditComponent={Input} value={"text"} textButton={"+ Add Desk"} />*/}
            {/*<EditableText TextComponent={Text} EditComponent={Input} value={"text"} textButton={"text"} size={"small"} />*/}
            {/*<EditableText TextComponent={TodoItemNew} EditComponent={Input} value={"text"} textButton={'text'} />*/}
            <Desks desks={desks}/>
        </div>
    )
}

export default Test


export async function getServerSideProps(context: any) {
    resetServerContext()
    return {props: {data: []}}
}
