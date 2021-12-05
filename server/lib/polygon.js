const APIKey = process.env.POLYGONKEY;
const bUrl = "https://api.polygon.io"


export function aggregates(ticker, multiplier, timespan, from, to, limit) {
    return `${bUrl}/v2/aggs/ticker/${ticker}/range/1/day/2021-07-22/2021-07-22?adjusted=true&sort=asc&limit=120&apiKey=g2xdpDPCcfjpzTny8bEKKVpseRkmWNBd`
}