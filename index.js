// Author: Vlad Glavtchev
// Date: September 2, 2020
// index.js

const express = require('express');
const server = express();

server.use('/', express.static(__dirname + '/'));
server.listen(3000, () => {
    console.log('Now serving at http://localhost:3000');
});
