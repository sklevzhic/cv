enum Marks {
    red = "red",
    green = "green"
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
