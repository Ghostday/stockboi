import { useState, useEffect } from 'react';
import Stock from './Stock'
import APIKEY from '../api'

export default function StockList() {
    const [gainers, setGainers] = useState(false)

    const fetchGainers = (apiKey) => {
        console.log(apiKey)
        fetch(`https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/gainers?apiKey=${apiKey}`)
        .then(res => res.json())
        .then(data => {
        console.log(data);
        setGainers(data.tickers)
        })
    }

    useEffect(() => {
        fetchGainers(APIKEY)
    }, [])


    return (
        <div id="StockList">
        { gainers ?
            gainers.map((stock, key) => {
              return <Stock stock={stock.ticker}/>
            }) : <h1>Not Loaded</h1>
        }
        </div>
    )

}