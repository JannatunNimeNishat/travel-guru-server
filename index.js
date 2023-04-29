const express = require('express')

const app = express();

const port = 5000;

const destinations = require('./data/destination.json');
const hotels = require('./data/hotels.json')

const cors = require('cors');
app.use(cors())

app.get('/destination',(req,res)=>{
    res.send(destinations);
})

app.get('/destination/:id',(req,res)=>{
    const id = req.params.id;
    const singleDes =   destinations.find(singleDestination => singleDestination.id === parseInt(id));
    res.send(singleDes);
})

app.get('/hotels',(req,res)=>{
    res.send(hotels);
})


app.listen(port,()=>{
    console.log(`server running at ${port}`);
})





