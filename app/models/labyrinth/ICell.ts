export class Cell {
    readonly x: number
    readonly y: number
    value: string
    constructor(x: number,y: number, value: string = "") {
        this.x = x
        this.y = y
        this.value = ""
    }
}