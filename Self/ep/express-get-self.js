const express = require('express')
const app = express()
const fs = require('fs')
const { nextTick } = require('process')

let data = JSON.parse(fs.readFileSync('sample.json'))
let users = data.users
let listcounter = 0

// app.get('/user/:id', (req, res) => {

//     res.send(users.find( x => parseInt(x.userId) === parseInt(req.params.id)))
// })

app.use('/list', (req, res, next) => {
    listcounter++
    console.log(listcounter)
    next()
})

app.get('/list', (req, res) => {
    res.send(users)
})

app.get('/user/:id', (req, res) => {
    res.send(users[req.params.id - 1])
})


app.get('/listname', (req, res) => {

    let outHTML = '<ul>'
    users.map( x => outHTML += `<li>${x.firstName}</li>`)
    res.send(outHTML += '</ul>')

})


app.listen(3000, () => console.log('Server run'))