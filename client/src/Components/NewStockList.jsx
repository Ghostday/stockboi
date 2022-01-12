import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stock from './Stock'
import {useState, useEffect} from 'react'
import APIKEY from '../api'

export default function BasicList() {
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
    <Box sx={{ width: '20%', minWidth: 150, bgcolor: 'grey', alignSelf: "flex-end" }}>
      <nav aria-label="secondary mailbox folders">
        <List dense="true">
          { gainers ?
            gainers.map((stock, key) => {
                return (
                    <ListItem divider="true" disablePadding="true">
                        <Stock stock={stock.ticker}/>
                    </ListItem>
                )
            }) : <h1>Not Loaded</h1>
        }
        </List>
      </nav>
    </Box>
  );
}
