export const isEqualArrays = (array1: string[], array2: string[]) => {
    array1 = array1.sort()
    array2 = array2.sort()
    return (array1.length == array2.length) && array1.every(function (element, index) {
        return element === array2[index];
    })
}