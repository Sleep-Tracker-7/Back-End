const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const cookieParser = require('cookie-parser')
const authRouter = require('../auth/auth-router')
const sleepRouter = require('../database/sleep-data/sleep-router')

const server = express();

server.use(helmet())
server.use(cors({ origin: true, credentials: true }))
server.use(express.json())
server.use(cookieParser())

server.use('/auth', authRouter)
server.use('/sleep', sleepRouter)

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "Your sleep was interrupted by an error!"
    })
})

module.exports = server;