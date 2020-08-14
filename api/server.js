const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req,res) => {
    res.status(200).json({ message: 'API is up and running for DB4 Project!'});
});

module.exports = server;