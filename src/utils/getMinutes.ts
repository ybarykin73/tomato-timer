const getMinutes = (time: number): string => {
    const minutes = Math.floor(time/60)
    return minutes >= 10 ? minutes.toString() : '0' + minutes
}

export default getMinutes