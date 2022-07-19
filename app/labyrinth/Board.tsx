import React, {useState} from 'react'
import {Cell} from "../models/labyrinth/ICell";
import {getCurrentStep} from "./getCurrentStep";

interface BoardGameProps {
    cells: Cell[][],
    handleStep: (v: string, i:number) => void
    clearSteps: () => void
}

export const BoardGame: React.FC<BoardGameProps> = ({cells, handleStep, clearSteps}) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null)
    const [finishCell, setFinishCell] = useState({x: 0, y: 0})
    const [isStart, setIsStart] = useState<boolean>(false)
    const handlerCell = (cell: Cell) => {
        if (!isStart) {
            setSelectedCell(cell)
            fillSteps(cell.x,cell.y, cells.length)
        } else {
        }
    }

    function fillSteps(x: number, y: number, size:number) {
        let current = 0;
        let arrowTemp = ""
        console.log(finishCell)
        // let timerId = setInterval(function() {
        //     let {nextX, nextY, arrow} = getCurrentStep(finishCell.x,finishCell.y, size)
        //
        //     setFinishCell({x: nextX, y: nextY})
        //     arrowTemp = arrow
        //     handleStep(arrow,current)
        //
        //     if (current == 9) {
        //         clearInterval(timerId);
        //     }
        //     current++;
        // }, 1000);

    }




    return <div className={"flex flex-col"}>
        {
            cells.map((row, i) => {
                return <div className={"flex"} key={i}>
                    {
                        row.map((cell) => {
                            return <div
                                key={`${cell.x}${cell.y}`}
                                onClick={() => handlerCell(cell)}
                                className={"flex w-24 h-24 border"}
                            >
                                {`${cell.x}${cell.y}`}
                                {(selectedCell?.x === cell.x && selectedCell.y === cell.y) ? "start" : ""}
                                {/*{(finishCell?.x === cell.x && finishCell.y === cell.y) ? "finish" : ""}*/}
                            </div>
                        })
                    }
                </div>
            })
        }

    </div>;
};