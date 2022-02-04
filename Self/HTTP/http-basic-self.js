const http = require('http')

http.createServer((req, res) => {
    let {httpVersion, method, url} = req

    res.writeHead(200, {'Content-type' : 'text/html'})

    if(req.url === '/') {
        res.write('<h2> This is Home page </h2>')
        return res.end()
    }

    if(req.url === '/user') {
        res.write('<h2> This is User page </h2>')
        return res.end()
    }


    res.statusCode = 404
    res.write('<hr><h3>Not found in our site</h3><hr>')
    res.end()
    
}).listen(8080, () => {console.log('Server start')})

