require('dotenv').config();
const express = require('express');
var favicon = require('serve-favicon');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '0.0.0.0';

app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

var listener = app.listen(PORT, HOST,function() {
  console.log('Your app is listening on port ' + listener.address().port);
});

