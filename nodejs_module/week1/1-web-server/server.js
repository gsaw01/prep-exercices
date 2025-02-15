const http = require('http');
const fs = require('fs/promises');
const path = require('path');

const possibleContentTypes = {
    '/': { file: 'index.html', type: 'text/html' },
    '/index.html': { file: 'index.html', type: 'text/html' },
    '/index.js': { file: 'index.js', type: 'application/javascript' },
    '/style.css': { file: 'style.css', type: 'text/css' },
};

const server = http.createServer(async (request, response) => {
    const { file, type } = possibleContentTypes[request.url];
    try {
        const data = await fs.readFile(path.join(__dirname, file), 'utf-8');
        response.writeHead(200, { 'Content-Type': type });
        response.end(data);
    } catch(error) {
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.end('Ooooops!');
    }
});

server.listen(3000);