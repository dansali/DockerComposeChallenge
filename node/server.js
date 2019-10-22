'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// HTTP routes for Node Express
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

// Listen to requests on HTTP 0.0.0.0:3000
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);