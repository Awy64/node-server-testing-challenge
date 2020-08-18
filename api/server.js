const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const animalRouter = require('../routers/animals-router');

const server = express();

server.use(express.json())
server.use(helmet())
server.use(morgan("dev"))

server.use('/animals', animalRouter)

server.get('/', (req, res) => {
  res.json({api: "up and running"})
})


server.use('/', (error, req, res, next) => {
  console.log(error);
  res.status(500).json({message: "somthing broke."})
})



module.exports = server;