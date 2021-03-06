const express = require('express');
const path = require('path');
const nomeApp = process.env.npm_package_name;
const app = express();
 
app.use(express.static('./dist/passaro-urbano'));
 
app.get('/*', (req, res) => {
    res.status(200).sendFile(path.join(__dirname ,'./dist/passaro-urbano/index.html'));
});
 
app.listen(process.env.PORT || 8080);