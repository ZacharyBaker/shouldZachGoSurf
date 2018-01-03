var express = require('express');
var app = express();
const PORT = process.env.PORT || 5000

app.get('/', function(req, res) {
  res.send('Should zach go surf? yes');
});

app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});