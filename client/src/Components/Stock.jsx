import { useEffect, useState } from "react"
import APIKEY from '../api'
<<<<<<< HEAD
import Loader from './Loader'

=======
>>>>>>> 3ce43e2a024548ed438056ab1bce53a95b1e14be

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
<<<<<<< HEAD
        <div>
=======
        <div className="top-stock">
>>>>>>> 3ce43e2a024548ed438056ab1bce53a95b1e14be
            <p className="stock-name">{stock}</p>
            <p className="stock-price">{price}</p>
        </div>
    )
}

