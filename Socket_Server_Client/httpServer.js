const http = require('http');

const server = http.createServer((req, res) => {
    console.log("New Connection is setup");
    
    if (req.url === '/home') {
        return res.end("Welocme home");
    }

    else {
        return res.end("Hellooooooo!");
    }
});

server.listen(3000, () => {
    console.log("server started at port 3000");
});