const APIKey = process.env.POLYGONKEY;
const bUrl = "https://api.polygon.io"

function getFormattedDate(date) {
    const year = date.getFullYear();
  
    const month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
  
    const day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    
    return month + '-' + day + '-' + year;
}


function dailyAggregate(ticker) {
    const date = getFormattedDate(new Date)
    console.log(date)
    return `${bUrl}/v2/aggs/ticker/${ticker}/range/1/day/${date}/${date}?adjusted=true&sort=asc&limit=120&apiKey=g2xdpDPCcfjpzTny8bEKKVpseRkmWNBd`
}

console.log(dailyAggregate('appl'))