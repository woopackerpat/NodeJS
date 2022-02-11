const {uniqueId} = require('lodash')

let todoList = []

const getTodoList = (req, res) => {
    res.status(200).send(todoList)
}

const createTodoList = (req, res) => {
    const newTodo = {
        id: uniqueId(),
        task: req.body.task
    }
    // todoList.push(newTodo)
    todoList = [...todoList, newTodo]
    res.status(201).send(newTodo)
}

const updateTodoList = (req, res) => {

   const targetId = String(req.params.id)
   const targetIndex = todoList.findIndex(x => x.id === targetId)
    todoList[targetIndex] = {
        id: targetId,
        task: req.body.task
    }

// filter เป็นการสร้าง object ตัวใหม่ ถ้าเอาไปเปลี่ยน [] เดิมจะต้องทำหลายขั้นตอน
    // const targetId = String(req.params.id)
    // let toUpdateTask = todoList.filter(x => x.id === targetId)

    // toUpdateTask = {
    //     id: targetId,
    //     task: req.body.id
    // }

    res.status(200).send({message: 'updating success'})
}

const deleteTodoList = (req, res) => {
    const targetId = String(req.params.id)
    todoList = todoList.filter(x => x.id !== targetId)
    res.status(204).send('deleted')
}

module.exports = {
    getTodoList,
    createTodoList,
    updateTodoList,
    deleteTodoList
}