
'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('<h1 style="color:green;">Node Js App running!</h1> \n');
});



app.get('/v1/health', (req, res) => {
  res.status(200).send('OK, <h1 style="color:violet;">Pod running successfully!</h1> ')
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);