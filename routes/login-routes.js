const { Router } = require('express')
const config = require('../config')
const router = Router()

router.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.status(200).send(process.env.SURNAME_RU)
})

router.get('/1', (req, res) => {
    res.writeHeader(200, { 'Content-Type': 'application/json' })
    res.write(JSON.stringify(process.env.SURNAME_RU))
    res.end()
})

router.get('/2', (req, res) => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8')
    res.status(200).json(process.env.SURNAME_RU)
})


router.get('/code1', (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.status(200).send(code)
})

router.get('/code2', (req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.status(200).send(code)
})

module.exports = router

const code = `<html>
    <head>
        <title>Login</title>
        <style>
            body {
                font-weight: 700;
                font-size: 21px;
            }
        </style>
    </head>
    <body>${process.env.SURNAME_EN}</body>
</html>
`