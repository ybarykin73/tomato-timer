const getSeconds = (time: number): string => {
    const seconds = time % 60
    return seconds > 10 ? seconds.toString() : '0' + seconds
}

export default getSeconds