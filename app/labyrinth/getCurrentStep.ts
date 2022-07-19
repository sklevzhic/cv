export function getCurrentStep(x: number, y: number, size: number) {

    let {axis, operator} = getRandomAxisAndOperator()
    let arrow: string  = ""
    let nextX = x
    let nextY = y

    let sumX = eval(`${nextX} ${operator === "+" ? "+" : "-"} 1`)
    let sumY = eval(`${nextY} ${operator === "+" ? "+" : "-"} 1`)

    if (sumX < 0) {
        operator = "+"
        sumX = -sumX
    }
    if (sumY < 0) {
        operator = "+"
        sumY = -sumY
    }

    if (sumX >= size) {
        operator = "-"
        sumX = sumX - 1
    }
    if (sumX >= size) {
        operator = "-"
        sumY = sumY - 1
    }

    if (axis === "x" && operator === "+") {
        arrow = "right"
    }
    if (axis === "x" && operator === "-") {
        arrow = "left"
    }
    if (axis === "y" && operator === "+") {
        arrow = "down"
    }
    if (axis === "y" && operator === "-") {
        arrow = "up"
    }


    nextX = axis === "x" ? sumX : nextX,
    nextY = axis === "y" ? sumY : nextY,
    arrow = arrow

    return {nextX,nextY,arrow}

}

function getRandomAxisAndOperator() {
    let operators = "-+";
    let operatorsIndex = Math.floor(Math.random() * operators.length);
    let axes = "xy";
    let axisIndex = Math.floor(Math.random() * operators.length);

    let operator = operators[operatorsIndex]
    let axis = axes[axisIndex]
    return {axis, operator}
}