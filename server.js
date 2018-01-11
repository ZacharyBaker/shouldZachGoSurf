var express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var app = express();
const PORT = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'dist')));

// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/dist/index.html');
// });

app.all('*', function(req, res){
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});