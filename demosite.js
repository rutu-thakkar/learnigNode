const http = require('http');
const fs = require('fs')

const port = process.env.PORT || 3000;

const server = http.createServer((req,res) => {
    console.log(req.url)
    res.setHeader('Content-Type', 'text/html');

    if (req.url == '/') {
        res.statusCode = 200;
        res.end('<h1>This is RutuThakkar</h1>')
    } else if (req.url == '/about') {
        res.statusCode = 200;
        res.end('<h1>hey there! know more about us..</h1>')
    } else if (req.url == '/contact') {
        res.statusCode = 200;
        res.end('<h1>Contact Us.</h1>')
    } else if (req.url == '/demosite') {
        res.statusCode = 200;
        const filereaded = fs.readFileSync('./demosite.html');
        res.end(filereaded.toString());
    }
     else {
        res.statusCode = 404;
        res.end('Page Not Found');
    }
})

server.listen(port, ()=> {
    console.log(`port listing on port http://localhost:${port}`)
})