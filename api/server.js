const express = require('express')
const helmet = require('morgan')
const morgan = require('morgan')

const server = express();

server.use(express.json())
server.use(helmet())
server.use(morgan("dev"))

server.get('/', (req, res) => {
  res.json({api: "up and running"})
})






module.exports = server;