const express = require('express')
const app = express()

const userRoute = require('./userRoute')
app.use('/user', userRoute)

app.use('/pub', express.static('./public'))


app.get('/', (req, res) => {
    res.redirect('/pub/form1.html')
})
app.get('/sample', (req, res) => {
    res.redirect('/pub/sample.json')
})


app.listen(3000, () => console.log('server start'))