const { randomBytes } = require('crypto')
const random = require('./myUtil')

console.log(random.getRandom(0, 9))
console.log(random.circleArea(20))
console.log(random.user)
console.log(random.user.name)

random.user.name = "mary"
console.log(random.user)

