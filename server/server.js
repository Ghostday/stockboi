if (process.env.NODE_ENV !== 'production') {
  require("dotenv").config();
}

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
  app.get('/stocks/submit', function (req, res) {
    const insert = mongo.db('stocks').collection("documents").insertMany([{a: 1}, {b: 2}, {c: 3}])
    res.send("documents added:", insert)  
    // res.send("heyy")
  })

  console.log(`HTTP Listening on ${process.env.PORT}`);

  // const insert = await mongo.db('stocks').collection("documents").insertMany([{a: 1}, {b: 2}, {c: 3}])
  // console.log('Inserted documents', insert)

  app.get('/stocks', (req, res) => {
    return res.send('GET HTTP method on user resource');
  });
  
  app.post('/stocks', (req, res) => {
    return res.send('POST HTTP method on user resource');
  });
  
  app.put('/stocks', (req, res) => {
    return res.send('PUT HTTP method on user resource');
  });
  
  app.delete('/users', (req, res) => {
    return res.send('DELETE HTTP method on user resource');
  });
  


})();