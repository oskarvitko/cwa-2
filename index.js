const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const fs = require('fs')

dotenv.config()

const PORT = process.env.PORT || 5000

const SURNAME = 'Oskar Vitko'

const PROMISE = `function task(x){ return new Promise((resolve, reject) => { (x < 18) ? resolve(x) : reject(x) }`

const app = express()

app.use(cors({
    origin: '*'
}))

app.get('/login', (req, res) => {
    res.status(200).send(SURNAME)
})

app.get('/promise', (req, res) => {
    res.status(200).send(PROMISE)
})

app.get('/fetch', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(5000, () => console.log(`Server start on PORT ${PORT}`))