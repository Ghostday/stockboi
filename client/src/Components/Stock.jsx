import { useEffect, useState } from "react"
import APIKEY from '../api'
import Loader from './Loader'


export default function Stock({stock}) {
    const [price, setPrice] = useState(false)
    
    useEffect(() => {
        fetch(`https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/tickers/${stock}?apiKey=${APIKEY}`)
        .then(data => data.json())
        .then(data => {
            console.log(data)
            setPrice(data.ticker.todaysChange)
        })
    })

    return (
        <div>
            <p className="stock-name">{stock}</p>
            <p className="stock-price">{price}</p>
        </div>
    )
}

