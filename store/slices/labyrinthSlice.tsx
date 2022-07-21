import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {initialBoard} from "../../app/labyrinth/utils/initialArrays";
import {arrows} from "../../app/labyrinth/getCurrentStep";


export interface LabyrinthState {
    size: number,
    board: ICell[][],
    steps: string[],
    isGame: boolean,
    startCell: ICell,
    errorCell: ICell,
    finishCell: ICell,
    isLoadingSteps: boolean
}

let defaultSteps = new Array(10).fill("")

const initialState: LabyrinthState = {
    size: 5,
    board: [],
    steps: defaultSteps,
    isGame: false,
    startCell: {} as ICell,
    errorCell: {} as ICell,
    finishCell: {} as ICell,
    isLoadingSteps: false
}

export const labyrinthSlice = createSlice({
    name: 'labyrinth',
    initialState,
    reducers: {
        setBoard: (state,action:PayloadAction<ICell[][]>) => {
            state.board = action.payload
        },
        setSize: (state,action:PayloadAction<number>) => {
            let size = action.payload < 3 ? 3 : action.payload > 25 ? 25 : action.payload
            state.size = size
        },
        setStartCell: (state,action:PayloadAction<ICell>) => {
            state.startCell = action.payload;
            state.finishCell = {visible: false} as ICell
            state.isGame = true
        },
        setFinishCell: (state,action:PayloadAction<ICell>) => {
            state.finishCell = action.payload
        },
        setErrorCell: (state,action:PayloadAction<ICell>) => {
            state.errorCell = action.payload
        },
        setIsGame: (state,action:PayloadAction<boolean>) => {
            state.isGame = action.payload
        },
        setNewGame: (state) => {
            state.board = initialBoard(state.size);
            state.isGame = false;
            state.steps = defaultSteps
            state.startCell = {visible: false} as ICell
            state.errorCell = {visible: false} as ICell
            state.finishCell = {visible: false} as ICell
        },
        setStep: (state,action:PayloadAction<{arrow: string, current: number}>) => {
            state.steps[action.payload.current] = action.payload.arrow
        },
        setIsLoadingSteps: (state,action:PayloadAction<boolean>) => {
            state.isLoadingSteps = action.payload
        },
    },
})

export const { setBoard, setStartCell, setFinishCell, setIsGame,
    setNewGame, setSize, setStep, setErrorCell, setIsLoadingSteps } = labyrinthSlice.actions

export default labyrinthSlice.reducer