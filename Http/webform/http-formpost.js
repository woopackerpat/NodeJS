const http = require('http')
const fs = require('fs')

let postHTML = fs.readFileSync('./formpost.html')

http.createServer( (req, res) => {
    
    let body = ''
    req.on('data', (chunk) => {
        body += chunk
    })
    req.on('end', () => {
        //คอนเทนต์ภาาษาไทย
        body= decodeURI(body)
        console.log('Body : ' + body)
        res.writeHead(200)
        res.write(`<p> ${body} </p>`)
        res.end(postHTML)
    })
}).listen(8080, () => console.log('Server start...5555555555'))