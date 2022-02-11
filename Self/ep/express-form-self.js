const express = require('express')
const app = express()
const fs = require('fs')

let outHTML = fs.readFileSync('./form1.html')
let data = JSON.parse(fs.readFileSync('./sample.json'))


let users = data.users



app.get('/search', (req, res) => {
    // let formHTML = `${outHTML}`
    res.send(outHTML)
    
})

app.get('/dosearch', (req, res) => {


    res.send(users.filter( x => x.firstName.includes(req.query.fname)))
})

app.get('/data', (req, res) => {
    res.send(data)
})

app.listen(3000, () => console.log('Server run'))

