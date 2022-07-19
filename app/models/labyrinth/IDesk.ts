import { Cell } from "./ICell"

export class Board {
    size: number
    cells: Cell[][] = []
    steps: string[] = []
    constructor(size: number) {
        this.size = size
    }

    initialDesk() {
        for (let i = 0; i < this.size; i++) {
            const row: Cell[] = []
            for (let j = 0; j < this.size; j++) {
                row.push(new Cell(j,i))
            }
            this.cells.push(row);
        }
    }

}