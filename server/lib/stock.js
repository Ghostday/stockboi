class Stock {
    constructor(ticker, price, amount) {
        this.ticker = ticker;
        this.price = price;
        this.amount = amount;
    }

    set price(price) {
        this.price = price;
    }

    
}

import StockData from '../exampleResponse.json'

console.log(StockData.tickers.length)
StockData.tickers[1]

const filterData = function(data) {
    let filteredData = data.filter(ticker => {
        return ticker.todaysChange != 0
    })
    return filteredData
}

const fetchYesterday = function(ticker) {
    fetch(`https://api.polygon.io/v2/aggs/ticker/${ticker}/prev?adjusted=true&apiKey=${APIKey}`)
    .then(data => data.json())
    .then(data => {
        let result = data.results[0].c
        return result
    })    
}

const findUptrends = function(data) {
    let filteredData = data.filter(ticker => {
        return ticker.todaysChange > 0.1
    })
    filteredData.forEach(ticker => {
        if (fetchYesterday(ticker) > ticker.todaysChange) {
            putInDatabase(trend, ticker)
        }
    })

    return filteredData
}


console.log(findUptrends(filterData(StockData.tickers)))



// console.log(filteredData.length)
// filteredData[0]

// const uptrending = filteredData.filter(stock => {
//     return stock.todaysChangePerc > 0
// })

// const downtrending = filteredData.filter(stock => {
//     return stock.todaysChangePerc < 0
// })

// const corrections = filteredData.filter(stock => {
//     return stock.todaysChangePerc < -10
// })


// console.log(uptrending.length)
// console.log(downtrending.length)
// console.log(corrections.length)
// console.log(corrections[1])






