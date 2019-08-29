const express = require('express');
const path = require('path');
const nomeApp = process.env.npm_package_name;
const app = express();
 
app.use(express.static('./dist/passaro-urbano'));
 
app.get('/*', (req, res) => {
    res.sendFile(path.join('./dist/passaro-urbano/index.html'));
});
 
app.listen(process.env.PORT || 8080);

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./src/app/shared/banco-de-dados.json');
const middlewares = jsonServer.defaults();
const port = 4000;

server.use(middlewares);
server.use(router);

server.listen(port);