const EventEmitter = require('events')
const em1 = new EventEmitter()



setInterval( () => em1.emit( 'onesec', {id: 1, txt: 'One second'}), 1000)

em1.on('onesec', (e) => {
    console.log(e.id + '=' + e.txt)
})