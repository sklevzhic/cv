import { ICell } from "../types/ICell";

export function initialBoard(size: number) {
    let arr: ICell[][] = []
    for (let i = 0; i < size; i++) {
        const row: ICell[] = []
        for (let j = 0; j < size; j++) {
            let obj: ICell = {
                x: j,
                y: i
            }
            row.push(obj)
        }
        arr.push(row);
    }
    return arr
}