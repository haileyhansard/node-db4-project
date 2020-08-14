const express = require('express');

const RecipeRouter = require('../recipes/recipe-router');

const server = express();

server.use(express.json());
server.use('/api/recipes', RecipeRouter);

server.get('/', (req,res) => {
    res.status(200).json({ message: 'API is up and running for DB4 Project!'});
});

module.exports = server;