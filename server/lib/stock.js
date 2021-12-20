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

const filteredData = StockData.tickers.filter(ticker => {
    return ticker.todaysChange != 0
})

console.log(filteredData.length)
filteredData[0] //

const uptrending = filteredData.filter(stock => {
    return stock.todaysChangePerc > 0
})

const downtrending = filteredData.filter(stock => {
    return stock.todaysChangePerc < 0
})

const corrections = filteredData.filter(stock => {
    return stock.todaysChangePerc < -10
})


console.log(uptrending.length)
console.log(downtrending.length)
console.log(corrections.length)
console.log(corrections[1])






