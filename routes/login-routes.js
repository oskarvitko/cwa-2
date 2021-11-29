const { Router } = require('express')
const config = require('../config')
const router = Router()

router.get('/', (req, res) => res.status(200).send(process.env.SURNAME_EN))

router.get('/ru', (req, res) => res.status(200).sendFile(config.rootDir + '/pages/surname.html'))

router.get('/by', (req, res) => res.status(200).sendFile(config.rootDir + '/pages/surname.html'))

module.exports = router