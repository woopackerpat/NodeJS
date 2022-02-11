const express = require('express')
const app = express()
const fs = require('fs')
const router = require('./userRoute')

let outHTML = fs.readFileSync('./form1.html')
let data = JSON.parse(fs.readFileSync('./sample.json'))
users = data.users

app.use('/', router)

app.get('/search', (req, res) => {
    let formHTML = `${outHTML}`

    res.send(formHTML)
})

app.get('/dosearch', (req, res) => {
    res.send(users.filter( x => x.firstName.includes(req.query.fname)))
})

app.listen(3000, () => console.log('Server run'))