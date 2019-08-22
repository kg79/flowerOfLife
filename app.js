const http = require('http');
const fs = require('fs');
const IP = process.env.myIP;
const PORT = 3334;

http.Server((req, res) => {
    fs.readFile('dynamicFlower.html', 'utf8', (err, data) => {
        res.end(data);
    })
}).listen(PORT, IP, console.log(`${IP}:${PORT}`));