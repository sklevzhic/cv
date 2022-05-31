import React from "react";

export enum Marks {
    emerald = "bg-emerald-300",
    yellow = "bg-yellow-300",
    red = "bg-red-300",
    gray = "bg-gray-300",
    lime = "bg-lime-300",
    green = "bg-green-300",
    cyan = "bg-cyan-300"
}



export interface ITodo {
    userId?: number,
    id: number,
    title: string,
    completed: boolean,
    marks?: Marks[]
}
export interface IDesk {
    id: number,
    name: string,
    todos: ITodo[] | []
}
