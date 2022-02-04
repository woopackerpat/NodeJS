const fs = require('fs')

let data, users

data = fs.readFileSync('./sample.json')
// console.log(`${data}`)

jsobj = JSON.parse(`${data}`)
// console.log(jsobj)

users = jsobj.users

users.map( user => {
    // user.phoneNumber = user.userId.toString().repeat(5)
    // console.log(`${user.firstName} : ${user.phoneNumber}`)
    if(user.firstName === 'devid') {
        user.firstName = 'kate'
    }

})

newData = JSON.stringify(jsobj)
// console.log(newData)
fs.writeFileSync('./output.json', newData)

let newJsonObj = JSON.parse(newData)
console.log(newJsonObj)



