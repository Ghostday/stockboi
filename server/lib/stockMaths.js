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
    const smoothing = smoothingFormula(numOfDays)

    let EMAArray = [arr[0]]
    for (let i = 1; i < arr.length; i++) {
        EMAArray.push(arr[i] * smoothing + EMAArray[i - 1] * (1 - smoothing))
    }
    return simpleMovingAverage(EMAArray)
}

exponentialMovingAverage([500, 200, 500, 400, 100, 600])




const results = [75, 23, 89, 23, 65]

// let average = results[0] + results[1] + results[2] + results[3] + results[4]
// console.log(average / results.length)


// average = results.reduce((val, curr) => {
//     return val + curr
// }, 0)
// console.log(average)


let average = 0
for (let i = 0; i < results.length; i++) {
    average += results[i]
}
average = average / results.length
console.log(average)