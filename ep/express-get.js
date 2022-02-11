// const express = require('express')
// const app = express()
// const fs = require('fs')

// let data = JSON.parse(fs.readFileSync('./sample.json'))
// let users = data.users

// app.get('/users/:id', (req, res) => {
//     res.send(users[parseInt(req.params.id) - 1])
// })

// app.listen(3000, () => console.log('server start...'))

const express = require('express')
const app = express()
const fs = require('fs')

let data = JSON.parse(fs.readFileSync('./sample.json'))
let users = data.users
let listcounter = 0

// middleware -> ทำก่อนไปใช้ app.get

app.use('/list', (req, res, next) => {
    listcounter++
    console.log('Request number :' + listcounter)
    //ต้องเรียก next() เสมอถึงจะส่งต่อไปที่ app.get()
    next()
})


app.get('/list' , (req, res) => {
    res.send(users)
})

// query ?

app.get('/search', (req, res) => {
    res.send(users.find( x => x.firstName === req.query.uname))
})

//เรียกแต่ละ user

app.get('/users/:uid', (req, res) => {
    res.send(users[parseInt(req.params.uid) - 1])
})

//หาตามชื่อ user

app.get('/username/:uname', (req, res) => {
    res.send(users.find( x => x.firstName === req.params.uname))
})


app.get('/listname', (req, res) => {
    let outHTML = '<ol>'
    users.forEach( x => {
        outHTML += `<li> ${x.firstName} ${x.lastName} ${x.emailAddress}</li>`
    })
    outHTML += '</ol>'
    res.send(outHTML)
})

app.listen(3000, () => console.log('server start'))
