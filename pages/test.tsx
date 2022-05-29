import {NextPage} from "next";
import { resetServerContext } from "react-beautiful-dnd";
import React from "react";

import TitlePage from "../app/components/TitlePage";
import {useSelector} from "react-redux";
import {RootState} from "../store";

import Desks from "../app/components/Desks";

const Test: NextPage = () => {
    const desks = useSelector((state: RootState) => state.todo.desks)

    return (
        <div>
            <TitlePage text={"Todo List"}/>
            <Desks desks={desks} />
        </div>
    )
}

export default Test

export async function getServerSideProps(context: any) {
    resetServerContext()
    return {props: { data : []}}
}
