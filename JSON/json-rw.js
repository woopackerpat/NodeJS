//download data from
//https:www.learningcontainer.com/sample-json-file
// เลือกไฟล์ "Sample JSON file with multi[le records download"

const fs = require('fs')
let data, jsobj, newdata

data = fs.readFileSync('./sample.json')
// console.log(`${data}`)
jsobj = JSON.parse(data)
// console.log(jsobj)
// console.log(jsobj.users[3].userId)

//สามารถใช้เป็น Array ได้เลย
users = jsobj.users

users.map( x => {
    x.phoneNumber = x.userId.toString().repeat(10)
    console.log(`${x.firstName} : ${x.phoneNumber}`)
})

newdata = JSON.stringify(jsobj)
fs.writeFileSync('./output.json', newdata)
console.log('Saved output.json Ok')

