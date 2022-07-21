import {useEffect, useState} from "react";

import {Settings} from "../app/labyrinth/Settings";
import {BoardGame} from "../app/labyrinth/Board";
import { Steps } from "../app/labyrinth/Steps";
import {initialBoard} from "../app/labyrinth/utils/initialArrays";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import { setBoard } from "../store/slices/labyrinthSlice";

function LabyrinthPage() {
    let dispatch = useDispatch()
    let [size, setSize] = useState<number>(5)

    useEffect(() => {
        let board = initialBoard(size)
        dispatch(setBoard(board))

    }, [])

    return <div className={"flex"}>
        <div className={"basis-2/6 shrink-0"}>
            <Settings />
        </div>
        <div className={"basis-4/6 "}>
            <div className={"relative"}>
                <BoardGame />
            </div>
            <div>
                <Steps/>
            </div>
        </div>
    </div>
}

export default LabyrinthPage
