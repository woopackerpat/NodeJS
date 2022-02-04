let pi = 3.14
const user = {name: 'John', age: 30}


exports.getRandom = function getRandom(min = 0, max = 9) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
module.exports.circleArea = function circleArea(r) {
    return pi*r**2
}


// module.exports.getRandom = getRandom

module.exports.user = user