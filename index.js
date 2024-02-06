const express = require("express");
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const connectDB = require('./config/db')
const admin = require('./routes/admin-route')
const discover = require('./routes/discover-route')
require('dotenv').config();
const colors = require('colors');

const app = express();

app.use(express.json());

connectDB();

app.get('/api/health', (req, res) =>{
    res.send({
        time: new Date(),
        server: "Shuffle Backend",
        status: "Active"
    });
});

app.use('/api/admin', admin);
app.use('/api/discover', discover);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`.yellow.bold);
})