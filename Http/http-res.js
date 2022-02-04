const http = require('http')

http.createServer( (req, res) => {
    res.writeHead(200, {'content-type' : 'text/html', 'Codecamp' : 'five'})
    // res.writeHead(200, {'Codecamp' : 'five'})
    res.write('This is response message...')
    res.write('from your local server')
    res.end('<h2>Good bye</h2>') 
}).listen(8080, () => {console.log('Server start...')})