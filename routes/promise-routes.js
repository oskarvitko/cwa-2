const { Router } = require('express')
const router = Router()

const PROMISE = `function task(x){ return new Promise((resolve, reject) =>  (x < 13) ? resolve(x) : reject(x))}`

router.get('/', (req, res) => {
    res.status(200).send(PROMISE)
})

module.exports = router