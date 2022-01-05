const http = require('http');
const { hostname } = require('os');

const port = process.env.PORT || 3000;

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>This is RutuThakkar</h1>')
})

server.listen(port, ()=> {
    console.log(`port listing on port http://localhost:${port}`)
})