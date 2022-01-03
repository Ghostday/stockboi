
const simpleMovingAverage = function(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i].c)
    }
    let total = newArr.reduce((val, curr) => {
        return val + curr
    }, 0)
    return (total / arr.length)
}