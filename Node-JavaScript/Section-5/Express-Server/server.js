const http = require('http');
const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log('Howdy, Welcome !');
    res.send('<h1>Howdy, Welcome !</h1>');
    next();
});

app.use((req, res, next) => {
    console.log(`This Is Praabindh's ⚓ Server`);
    res.send(`This Is Praabindh's ⚓ Server</h1>`);
    next();
});

const server = http.createServer(app);

server.listen(3000);
