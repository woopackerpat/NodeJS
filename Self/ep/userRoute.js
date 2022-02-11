const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('No user')
})

router.get('/first', (req, res) => {
    res.send('First user')
})

router.get('/second', (req, res) => {
    res.send('Second user')
})

module.exports = router