import React, {useEffect, useState} from 'react'
import {getNextStep} from "./getCurrentStep";

import {BsCursorFill, BsXCircleFill, BsCheckCircleFill} from "react-icons/bs"
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {
    setErrorCell,
    setFinishCell,
    setIsGame,
    setNewGame,
    setStartCell,
    setStep
} from '../../store/slices/labyrinthSlice';

interface BoardGameProps {

}

export const BoardGame: React.FC<BoardGameProps> = () => {
    let dispatch = useDispatch()

    let {board, startCell, errorCell, finishCell, isGame} = useSelector((state: RootState) => state.labyrinth)
    const handlerCell = (cell: ICell) => {
        if (!isGame) {
            dispatch(setNewGame())
            dispatch(setStartCell(cell))
            fillSteps(cell.x, cell.y, board.length)
        } else {
            if ((finishCell.x === cell.x) && (finishCell.y === cell.y)) {
                dispatch(setFinishCell({...finishCell, visible: true}))
            } else {
                dispatch(setErrorCell({...cell, visible: true}))
                dispatch(setFinishCell({...finishCell, visible: true}))
            }
            dispatch(setIsGame(false))
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
            dispatch(setStep({arrow, current}))

            if (current == 9) {
                dispatch(setFinishCell({x: nextX, y: nextY, visible: false}))
                clearInterval(timerId);
            }
            current++;
        }, 100);

    }

    return <div className={"flex flex-col"}>
        {
            board.map((row, i) => {
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
                                {(errorCell.x === cell.x && errorCell.y === cell.y && errorCell.visible)
                                    ? <BsXCircleFill className={"text-7xl center text-red-600"}/>
                                    : ""}
                                {(finishCell.x === cell.x && finishCell.y === cell.y && finishCell.visible)
                                    ? <BsCheckCircleFill className={"text-7xl center text-green-600"}/>
                                    : ""}
                            </div>
                        })
                    }
                </div>
            })
        }

    </div>;
};