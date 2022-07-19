import {useEffect, useState} from "react";

import {Board} from "../app/models/labyrinth/IDesk";
import {Settings} from "../app/labyrinth/Settings";
import {BoardGame} from "../app/labyrinth/Board";
import { Steps } from "../app/labyrinth/Steps";

function LabyrinthPage() {
    let [size, setSize] = useState<number>(6)
    const [board, setBoard] = useState(new Board(size))
    let [steps, setSteps] = useState<string[]>(new Array(10).fill(""))

    function handleStep(arrow: string,i: number) {

            setSteps(prevState => {
                let arr = [...prevState]
                arr[i] = arrow

                return arr
            })
    }

    function clearSteps() {
        setSteps(new Array(10).fill(""))
    }

    useEffect(() => {
        renderDesk()
    }, [])

    const renderDesk = () => {
        let board = new Board(size)
        board.initialDesk()
        setBoard(board)
    }


    return <div className={"flex"}>
        <div className={"basis-2/6 shrink-0"}>
            <Settings />
        </div>
        <div className={"basis-4/6 shrink-0"}>
            <div>
                <BoardGame cells={board.cells} handleStep={(arrow,i) => handleStep(arrow,i)} clearSteps={clearSteps}/>
            </div>
            <div>
                <button onClick={() => clearSteps()}>del</button>
                <Steps steps={steps}/>
            </div>
        </div>
    </div>
}

export default LabyrinthPage
