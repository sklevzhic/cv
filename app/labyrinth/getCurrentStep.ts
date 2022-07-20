let arrows = {
    "up": {axis: "y", operator: "-"},
    "down": {axis: "y", operator: "+"},
    "left": {axis: "x", operator: "-"},
    "right": {axis: "x", operator: "+"}
}
export function getNextStep(x: number, y: number, size: number) {

    let arrow = getRandomArrow(x,y,size)
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