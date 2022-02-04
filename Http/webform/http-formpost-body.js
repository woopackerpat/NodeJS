const http = require('http')
const fs = require('fs')
const formBody = require('body/form')

let postHTML = fs.readFileSync('./formpost.html')

http.createServer( (req, res) => {
    if (req.url === '/')
        return res.end(postHTML)

    formBody(req, res, (err, body) => {
        if (err) {
            res.statusCode = 500
            return res.end("Body error")
        }
        console.log(body.fname + ' ' + body.lname)
        res.writeHead(200)
        res.write(`<p>ชื่อ: ${body.fname}, นามกสุล: ${body.lname}</p>`)
        res.end(postHTML)
        
    })


}).listen(8080, () => console.log('Server start...testest'))