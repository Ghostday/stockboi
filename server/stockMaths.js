export const simpleMovingAverage = function(arr) {
    let total = arr.reduce((val, curr) => {
        return val + curr
    }, 0)
    return (total / arr.length)
}

simpleMovingAverage([500, 100, 800])

const smoothingFormula = (period) => {
    return (2 / (period + 1))
}

export const exponentialMovingAverage = function(arr) {
    const numOfDays = arr.length
    const sFactor = smoothingFormula(numOfDays)

    let EMAArray = [arr[0]]
    for (let i = 1; i < arr.length; i++) {
        EMAArray.push(arr[i] * sFactor + EMAArray[i - 1] * (1 - sFactor))
    }
    return simpleMovingAverage(EMAArray)
}

exponentialMovingAverage([500, 200, 500, 400, 100, 600])