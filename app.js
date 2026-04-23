const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/hello') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello DevOps World\n');
    } else {
        res.writeHead(404);
        res.end();
    }
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});