const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.redirect()
})

app.listen(3000, () => console.log('Server start'))
