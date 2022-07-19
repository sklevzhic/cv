import {useEffect, useState} from "react";

import {Board} from "../app/models/labyrinth/IDesk";
import {Cell} from "../app/models/labyrinth/ICell";
import {getCurrentStep} from "../app/labyrinth/getCurrentStep";



function LabyrinthPage() {
    let [size, setSize] = useState<number>(6)
    let [steps, setSteps] = useState<{x:number,y:number,arrow: string}[] | null[]>(new Array(10).fill(null))
    const [board, setBoard] = useState(new Board(size))
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null)
    const [finishCell, setFinishCell] = useState<Cell | null>(null)
    const [isStart, setIsStart] = useState<boolean>(false)
    console.log(steps)
    useEffect(() => {
        renderDesk()
    }, [])

    const renderDesk = () => {
        let board = new Board(size)
        board.initialDesk()
        setBoard(board)
    }

    const fillSteps = (cell: Cell, size: number) => {
        let x1 = cell.x
        let y1 = cell.y
        let arrow1: string | null = ""

        let res = []

        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                let obj = getCurrentStep(x1, y1, size)
                let {tempX,tempY,arrow} = obj
                x1 = tempX
                y1 = tempY
                arrow1 = arrow
                res.push(obj)
            },1000)
        }
        // @ts-ignore
        setSteps(res)
    }
    const handlerCell = (cell: Cell) => {
        if (!isStart) {
            setSelectedCell(cell)
            // setIsStart(true)
            fillSteps(cell, size)
            // setFinishCell(null)
        } else {
            console.log("Поиск победы")
            setIsStart(false)
        }
    }

    return <div className={"flex"}>
        <div className={"basis-2/6 shrink-0"}>
            В начале игры в случайную ячейку помещаем маркер. Далее генерируются 10 «ходов» (возможные варианты «вверх»,
            «влево», «вниз», «вправо»). Игрок должен в уме «пройти» по этим ходам по лабиринту и указать конечную точку
            маркера.
            <br/>
            После ответа (клик на ячейку) идет проверка ответа и предоставляется возможность начать новую игру
            (например, по клику на кнопку «Далее»).
            <br/>
            Если ответ введен неправильно - указать правильный ответ. Дизайн игры произвольный.
        </div>
        <div className={"basis-4/6 shrink-0"}>
            <div className={"flex flex-col"}>
                {
                    board.cells.map((row, i) => {
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
                                        {(finishCell?.x === cell.x && finishCell.y === cell.y) ? "finish" : ""}
                                    </div>
                                })
                            }
                        </div>
                    })
                }

            </div>
            <div>
                Шаги
                <div className={"flex w-80"}>
                    {
                        steps.map(el => {
                            return <div className={"border shrink-0 w-10 h-10"}>{el?.arrow}</div>
                        })
                    }
                </div>
            </div>
        </div>
    </div>
}

export default LabyrinthPage
