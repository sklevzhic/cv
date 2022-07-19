export function getCurrentStep(x: number, y: number, size: number) {
    let {axis, operator} = getRandomAxisAndOperator()
    let arrow: string | null = null
    let tempX = x
    let tempY = y

    let sumX = eval(`${tempX} ${operator === "+" ? "+" : "-"} 1`)
    let sumY = eval(`${tempY} ${operator === "+" ? "+" : "-"} 1`)

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


    tempX = axis === "x" ? sumX : tempX,
    tempY = axis === "y" ? sumY : tempY,
    arrow = arrow

    return {tempX,tempY,arrow}

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