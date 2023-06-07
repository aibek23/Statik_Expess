const express = require('express');
const path = require('path')
const app = express();
const port = 3000;
var fs = require('fs');



app.get('/', (req, res) => {
  fs.readFile(__dirname + '/index.html', 'utf8', function(err, text){
    res.send(text);
});
});
app.get('/test', function(req, res) {
  fs.readFile(__dirname + '/views/test.html', 'utf8', function(err, text){
      res.send(text);
  });
});
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
