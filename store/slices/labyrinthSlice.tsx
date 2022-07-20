import { createSlice } from '@reduxjs/toolkit'
import { Cell } from '../../app/models/labyrinth/ICell'
import {Board} from "../../app/models/labyrinth/IDesk";


export interface LabyrinthState {
    size: number,
    board: Board,
    steps: string[],
}

let filledArray = new Array(10).fill("")

const initialState: LabyrinthState = {
    size: 5,
    steps: filledArray
}

export const labyrinthSlice = createSlice({
    name: 'labyrinth',
    initialState,
    reducers: {
        initialDesks: (state) => {

        },
        saveDesks: (state) => {

        },
    },
})

export const { initialDesks } = labyrinthSlice.actions

export default labyrinthSlice.reducer