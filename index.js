const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const config = require('./config')

dotenv.config()

const PORT = process.env.PORT || 5000

const app = express()

app.use(express.static(config.rootDir + '/pages'))
app.use(express.json())
app.use(cors({
    origin: '*'
}))

app.use('/login', require('./routes/login-routes'))
app.use('/env', require('./routes/env-routes'))
app.use('/promise', require('./routes/promise-routes'))
app.use('/fetch', require('./routes/fetch-routes'))

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.status(500).send(html500)
})

app.get('*', (req, res) => {
    res.status(404).sendFile(config.rootDir + '/pages/notFound.html')
})

app.listen(PORT, () => console.log(`Server start on PORT ${PORT}`))

const html500 = `
    <html>
        <head><title>500</title></head>
        <style>
            body {
                background-color: #3b3bf9;
                color: #ff2828;
                text-align: center;
            }
        </style>
        <body>
        <h1>
            Не понял - ошибка  500 (Internal Server Error)
            </h1>
        </body>
    </html>
`