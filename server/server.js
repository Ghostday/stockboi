// if (process.env.NODE_ENV !== 'production') {
  require("dotenv").config();
// }

const path = require("path");
const express = require("express");
const app = express();

const { MongoClient } = require("mongodb");

(async () => {
  const mongo = new MongoClient(process.env.MONGODB, {auth:({username: process.env.MONGOUSERNAME, password: process.env.MONGOPASSWORD})});

  try {
    await mongo.connect();
  } catch (err) {
    console.log('Failed to connect to MongoDB');
    console.log(err);
    process.exit(1);
  }

  console.log('Connected to MongoDB');

  app.use(express.static(path.join(__dirname, '../dist')));
  app.listen(process.env.PORT);
  
  // const insert = mongo.db('stocks').collection("documents").insertMany([{a: 100}, {b: 200}, {c: 300}])
  app.get('/stocks/submit', function (req, res) {
    res.send("documents added:", insert)  
    // res.send("heyy")
  })

  console.log(`HTTP Listening on ${process.env.PORT}`);

  // const insert = await mongo.db('stocks').collection("uptrending").insertMany([{ticker: "AAPL", currentPrice: 200, trendingPercent: 2}, {Name: "Chris"}, {AAPL: 300}])
  // console.log('Inserted documents', insert)
 
  app.get('/stocks', async (req, res) => {
    const documents = await mongo.db('stocks').collection("uptrending").find({ticker: "AAPL"})
    documents.forEach(doc => JSON.stringify(doc))
    console.log('Updated documents', documents)
    res.send(documents);

  });
  
  // app.post('/stocks', (req, res) => {
  //   return res.send('POST HTTP method on user resource');
  // });
  
  // app.put('/stocks', (req, res) => {
  //   return res.send('PUT HTTP method on user resource');
  // });
  
  // app.delete('/users', (req, res) => {
  //   return res.send('DELETE HTTP method on user resource');
  // });
  


})();

