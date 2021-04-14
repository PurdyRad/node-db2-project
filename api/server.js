// const { json } = require("express")
const express = require("express")
const carsRouter = require('./cars/cars-router');

const server = express();

server.use(express.json());

server.use('/api/cars', carsRouter);

server.get('*', (req,res) => {
    res.send(`<h2>Sorry Princess is not here</h2>`)
});

module.exports = server;
