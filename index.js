const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose'); 
require('dotenv/config');
const postRoute = require('./routes/posts');

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/posts', postRoute); 

// Routes 
app.get('/', (req, res) => {
    res.send(`we are at home`); 
})

//Connect to Database
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
    console.log(`connected to Database`); 
})

app.listen(port, (req, res) => {
    console.log(`app started on port ${port}`); 
})