const express = require('express');
const app = express();
// Add body parsing middleware
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

const bodyParser = require('body-parser');

const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://petfindr:sh7RoPYfJN38TP1b@petfindr-db.uya6ju2.mongodb.net/?retryWrites=true&w=majority");

const port = 3000;

const userRoute = require('./api/userCollection');
const queryRoute = require('./api/queryCollection');

app.use('/', userRoute);
app.use('/', queryRoute);


app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})