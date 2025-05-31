const http = require('http');
const port = 5000;
const hostname = '127.0.0.1'
const server = http.createServer((req, res)=>{
    res.writeHead(201, {'contebt-type': 'text/plain'});
    res.end('Hellow world')
});
server.listen(port,hostname,()=>{
    console.log(`server is running on http://${hostname}:${port}`)
})