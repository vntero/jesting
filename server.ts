import express from "express"

const server = express()

server.get('/test', (req, res) => {
    res.send("Hello world!")
})

export default server