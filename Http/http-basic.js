const http = require('http')
// const server = http.createServer()

// server.on('request', (req, res) => {
//     console.log('request coming..')
//     res.writeHead(200, {'Content-type' : 'text/html'})
//     res.write('Hihihihihihihihi')
//     res.end()
// })

// server.listen(8080)

//re-factor

// http.createServer( (req, res) => {
    
//     console.log('request coming..')
//     res.writeHead(200, {'Content-type' : 'text/html'})
//     res.write('Hihihihihihihihi')
//     res.end()
// }).listen(8080)

//ทำเป็นฟังก์ชั่นก็ได้

function app(req, res) {
    console.log('request coming..')
    res.writeHead(200, {'Content-type' : 'text/html'})
    res.write('Hihihihihihihihi')
    res.end()
}

http.createServer(app).listen(8080)



