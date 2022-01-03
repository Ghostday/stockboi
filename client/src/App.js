import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import Stock from './Components/Stock'

function App() {
  const [gainers, setGainers] = useState(false)
  
  useEffect(() => {
    fetch(`https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/gainers?apiKey=g2xdpDPCcfjpzTny8bEKKVpseRkmWNBd`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setGainers(data.tickers)
    })
  })

  return (
    <div className="App">
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        { gainers ?
          gainers.map((stock, key) => {
            return <Stock stock={stock.ticker}/>
          }) : <h1>Not Loaded</h1>
        }
      </header>
    </div>
  );
}

export default App;

