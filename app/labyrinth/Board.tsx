import React, {useEffect, useState} from 'react'
import {Cell} from "../models/labyrinth/ICell";
import {getNextStep} from "./getCurrentStep";

import {BsCursorFill, BsXCircleFill, BsCheckCircleFill} from "react-icons/bs"

interface BoardGameProps {
    cells: Cell[][],
    handleStep: (v: string, i:number) => void
    newGame: () => void,
    isGame: boolean
}

export const BoardGame: React.FC<BoardGameProps> = ({cells, handleStep, newGame, isGame}) => {
    const [startCell, setStartCell] = useState<Cell | null>(null)
    const [finishCell, setFinishCell] = useState({x: 0, y: 0, visible: false})
    const [selectedCell, setSelectedCell] = useState({x: 0, y: 0, visible: false})
    const [isStart, setIsStart] = useState<boolean>(false)
    const handlerCell = (cell: Cell) => {
        if (isStart) {
            if (finishCell.x === cell.x && finishCell.y ===cell.y) {
                console.log("won")
            } else {
                setFinishCell({...finishCell, visible: true})
            }
            setIsStart(false)
        } else {
            setIsStart(true)
            setStartCell(cell)
            fillSteps(cell.x, cell.y, cells.length)
        }
    }

    function fillSteps(x: number, y: number, size:number) {
        let current = 0;
        let arrowTemp = ""
        let tempX = x
        let tempY = y
        let timerId = setInterval(function() {
            let {nextX, nextY, arrow} = getNextStep(tempX, tempY, size)

            tempX = nextX
            tempY = nextY

            arrowTemp = arrow
            handleStep(arrow, current)

            if (current == 9) {
                setFinishCell({...finishCell, x: nextX, y: nextY})
                clearInterval(timerId);
            }
            current++;
        }, 300);

    }




    return <div className={"flex flex-col"}>
        {
            cells.map((row, i) => {
                return <div className={"flex items-center"} key={i}>
                    {
                        row.map((cell) => {
                            return <div
                                key={`${cell.x}${cell.y}`}
                                onClick={() => handlerCell(cell)}
                                className={`flex w-24 h-24 border bg-yellow-200 ${isGame ? "cursor-pointer" : ""}" p-2 hover:bg-yellow-300`}
                            >
                                {(startCell?.x === cell.x && startCell.y === cell.y)
                                    ? <BsCursorFill className={"text-7xl center text-blue-100"}/>
                                    : ""}
                                {(finishCell.x === cell.x && finishCell.y === cell.y && finishCell.visible)
                                    ? <BsXCircleFill className={"text-7xl center text-red-500"}/>
                                    : ""}
                                {/*{(3 === cell.x && 3 === cell.y)*/}
                                {/*    ? <BsCheckCircleFill className={"text-7xl center text-green-600"}/>*/}
                                {/*    : ""}*/}
                            </div>
                        })
                    }
                </div>
            })
        }

    </div>;
};