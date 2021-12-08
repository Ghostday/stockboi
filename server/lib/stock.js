class Stock {
    constructor(ticker, price, amount) {
        this.ticker = ticker;
        this.price = price;
        this.#amount = amount;
    }

    set price(price) {
        this.price = price;
    }

    
}