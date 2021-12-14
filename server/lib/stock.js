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

import StockFetch from '../exampleResponse.json'

const stockData = StockFetch.tickers
console.log(stockData.length)
let stocksInUse = stockData.filter((ticker) => {
    return ticker.todaysChange != 0
})
stocksInUse //

console.log(stocksInUse.length)

let stocksUptrending = stocksInUse.filter((ticker) => {
    return ticker.todaysChange > 0
})

stocksUptrending.length