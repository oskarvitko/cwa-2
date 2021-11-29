const { Router } = require('express')
const config = require('../config')
const router = Router()

router.get('/', (req, res) => {
    res.status(200).sendFile(config.rootDir + '/pages/fetch.html')
})

module.exports = router