const { Router } = require('express')
const router = Router()

const PROMISE = `function task(x){ return new Promise((resolve, reject) =>  (x < 13) ? resolve(x) : reject(x))}`

router.get('/', (req, res) => {
    res.status(200).send(PROMISE)
})

router.get('/:x', async (req, res) => {
    const { x } = req.params
    if (Number.isNaN(Number(x))) return res.status(403).send(`Bad request: "${x}" is not a number`)
    const result = await task(x)
    res.status(200).send(result)
})

module.exports = router

function task(x){
    return new Promise((resolve, reject) => (x < 13) ? resolve('yes') : resolve('no'))
}
