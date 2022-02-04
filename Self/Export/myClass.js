const random = require('./myUtil')

class Human {
    constructor(name, age = random.getRandom(20, 60) ) {
        this.name = name
        this.age = age
    }
    info() {console.log(this.name, this.age)}
}

module.exports.Human = Human