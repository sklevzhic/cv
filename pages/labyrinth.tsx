import {useEffect, useState} from "react";

import {Board} from "../app/models/labyrinth/IDesk";
import {Settings} from "../app/labyrinth/Settings";
import {BoardGame} from "../app/labyrinth/Board";
import { Steps } from "../app/labyrinth/Steps";

function LabyrinthPage() {
    let [size, setSize] = useState<number>(5)
    let [isGame, setIsGame] = useState<boolean>(true)
    const [board, setBoard] = useState(new Board(size))
    let [steps, setSteps] = useState<string[]>(new Array(10).fill(""))

    function handleStep(arrow: string,i: number) {

            setSteps(prevState => {
                let arr = [...prevState]
                arr[i] = arrow

                return arr
            })
    }
    function newGame() {
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
        <div className={"basis-4/6 "}>
            <div className={"relative"}>
                <div className={"absolute bg-white opacity-60 border-8" +
                    "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"}>
                    <button>newGame</button></div>
                <BoardGame
                    cells={board.cells}
                    handleStep={(arrow,i) => handleStep(arrow,i)}
                    newGame={newGame}
                    isGame={isGame}
                />
            </div>
            <div>
                <button onClick={() => newGame()}>del</button>
                <Steps steps={steps}/>
            </div>
        </div>
    </div>
}

export default LabyrinthPage
