const http = require('http')
const fs = require('fs')
const url = require('url')

function renderHTML(filename, req, res) {
    fs.readFile(filename, (err, data) => {
        res.writeHead(200, {"content-type" : "text/html"})
        res.write(data)
        res.end()
    })
}

http.createServer( (req, res) => {

    let myURL = url.parse(req.url, true)

    console.log(myURL.pathname)
    console.log(myURL.query)

    if(req.url === '/')
        return renderHTML('./formget.html', req, res)

    if(myURL.pathname === '/getdata') {
        res.writeHead(200, {"content-type" : "text/html; charset = utf8"})
        res.write(`<h3>We got your data</h3>` )
        res.write(`<p>ชื่อ: ${myURL.query.fname}</p>` )
        res.write(`<p>นามสกุล: ${myURL.query.lname}</p>` )
        return res.end()
    }

    res.writeHead(404, {"content-type" : "text/html"})
    res.write(req.url)
    res.end()

}).listen(8080, () => {console.log('Server start')})