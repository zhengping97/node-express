const http = require('http')

const server = http.createServer((req, res) => {
    // console.log(req.method)
    // console.log(req.url)
    const url = req.url;
    //homepage
    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>home page</h1>')
        res.end()
    }
    //homepage
    else if (url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>about page</h1>')
        res.end()
    }
    //error
    else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write('<h1>page not found</h1>')
        res.end()
    }
})

server.listen(5000) // http://localhost:5000/

// Informational responses (100-199)
// Successful responses (200-299)
// Redirects (300-399)
// Client errors (400-499)
// Server errors (500-599)

//MIME type: https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types