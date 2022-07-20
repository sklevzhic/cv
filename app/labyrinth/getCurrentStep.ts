import { BsArrowUpCircleFill, BsArrowDownCircleFill, BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"

export const arrows = {
    "up": {axis: "y", operator: "-", icon: BsArrowUpCircleFill },
    "down": {axis: "y", operator: "+", icon: BsArrowDownCircleFill},
    "left": {axis: "x", operator: "-", icon: BsArrowLeftCircleFill},
    "right": {axis: "x", operator: "+", icon: BsArrowRightCircleFill}
}
export function getNextStep(x: number, y: number, size: number) {

    let arrow = getRandomArrow(x,y,size)
    // @ts-ignore
    let arrowInfo = arrows[arrow]
    let nextX = (arrowInfo.axis === "x") ? eval(`${x} ${arrowInfo.operator}  1`) : x
    let nextY = (arrowInfo.axis === "y") ? eval(`${y} ${arrowInfo.operator}  1`) : y
    return {nextX, nextY, arrow}

}

function getRandomArrow(x: number, y: number, size:number) {
    let array = Object.keys(arrows);
    if (x === 0) {
        delete array[array.findIndex((el: string) => el === "left")]
    }
    if (y === 0) {
        delete array[array.findIndex((el: string) => el === "up")]
    }
    if (x === size - 1) {
        delete array[array.findIndex((el: string) => el === "right")]
    }
    if (y === size - 1) {
        delete array[array.findIndex((el: string) => el === "down")]
    }
    array = array.filter(n => n)
    let a = Math.floor(Math.random()*array.filter(n => n).length)
    return array[a]
}