const express = require('express')
const app = express()
const todoListRoutes = require('./routes/todolist')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/todo-list', todoListRoutes)




app.listen(8080, () => console.log('Server run'))