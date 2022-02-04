var fs = require('fs')

function readMessage() {
    return new Promise( (fulfill, reject) => {
        fs.readFile( 'message.txt', 'utf-8', (err, res) => {
            if (err) reject(err);
            else fulfill(res);
        })
    })
}

function writeMessage(dat) {
    return new Promise( (fulfill, reject) => {
        fs.writeFile('out.txt', dat, (err, res) => {
            if (err) reject(err);
            else fulfill(res);
        })
    })
}

//.then(writeMessage) ไม่ต้องมี () เนื่องจากมีตัวแปรเดียว สามารถย่อได้ และไม่ต้องใส่ () => 

// ตัวเต็ม readMessage().then(data => writeMessage(data)).then(function(){
//     console.log('success')
// })

readMessage().then(writeMessage).then(function(){
    console.log('success')
})