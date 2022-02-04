const EventEmitter = require('events')
const em1 = new EventEmitter()
const em2 = new EventEmitter()

setInterval( () => em1.emit('onesec', {id:1, txt:'One second'}), 1000)
setInterval( () => em1.emit('twosec'), 2000)

em1.on('onesec', (e) => {
    console.log(e.id + '=' + e.txt)
})

em2.on('onesec', (e) => {
    console.log('From em2')
})

// em1.on('twosec', () => {
//     console.log('Two second')
// })