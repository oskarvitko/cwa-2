const { Router } = require('express')
const config = require('../config')
const router = Router()

router.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.status(200).send(process.env.SURNAME_EN)
})

router.get('/ru', (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.setHeader('Accept-Language', 'ru-RU')
    res.status(200).send(code)
})

router.get('/code', (req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.setHeader('Accept-Language', 'by-BY')
    res.status(200).send(code)
})

module.exports = router

const code = `
    <html>
        <head>
            <title>Login</title>
            <style>
                body {
                    font-weight: 700;
                    font-size: 18px;
                }
            </style>
        </head>
        <body>${process.env.SURNAME_RU}</body>
    </html>
`