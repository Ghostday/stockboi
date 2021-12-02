fetch('https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2020-06-01/2020-06-17?apiKey=g2xdpDPCcfjpzTny8bEKKVpseRkmWNBd')
.then(response => response.json())
.then(data => {
    console.log(data)
    const value2 = data.results[2].v
    let result = simpleMovingAverage(data.results)
    console.log(result)
})

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