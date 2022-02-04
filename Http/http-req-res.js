const http = require('http')

http.createServer( (req, res) => {
    // res.writeHead(200, {
    //     'content-type' : 'text/html'
    // })
    
    //ใช้ set แทน
    res.statusCode = 200
    res.setHeader('content-type', 'text/html')

    if(req.url === '/') {
        res.write('<h2> This is Home page </h2>')
        //ต้องใส่ return
        return res.end()
    }

    if(req.url === '/user') {
        res.write('<h2> This is User page </h2>')
        //ต้องใส่ return
        return res.end()
    }

    // res.writeHead(404, 'Not Found in our site', {
    //     'content-type' : 'text/html'
    // })

    // ใช้ set 
    res.statusCode = 404
    res.statusMessage = 'Not found in our site....'
    res.write(res.statusMessage)
    // res.setHeader('content-type', 'text/html')


    res.end('<hr><h3>Not found</h3><hr>')
}).listen(8080, () => {console.log('Server start')})