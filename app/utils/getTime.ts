export const getTime = (timestamp: number) => {
    let hours = new Date(timestamp).getHours()
    let minutes = new Date(timestamp).getMinutes()
    return `${hours}:${minutes}`
}