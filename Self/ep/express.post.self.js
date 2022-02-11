const express = require('express')
const app = express()
const bodyParse = require('body-parser')
const fs = require('fs')

let data = JSON.parse(fs.readFileSync('./sample.json'))
users = data.users

let outHTML = fs.readFileSync('./form2.html')


// console.log(users)
app.use(express.urlencoded({ extended: true }))
app.use('/pub', express.static('./public'))
app.get('/', (req, res) => {
    res.redirect('/pub/form2.html')
    // res.send('hello')
})

app.post('/dosearch2', (req, res) => {
    console.log(req.body)
    res.send(users.filter(x => x.firstName.includes(req.body.fname)))
})



app.listen(3000, () => console.log('Server run'))