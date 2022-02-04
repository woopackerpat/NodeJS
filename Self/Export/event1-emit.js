const EventEmitter = require('events')

class Em1 extends EventEmitter {
    emit1() {
        setInterval( () => {this.emit('onesec', 1111)}, 1000)
    }
}

module.exports = Em1