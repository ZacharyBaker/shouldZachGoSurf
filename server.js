var express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { createEngine } = require('express-react-views');



var app = express();
const PORT = process.env.PORT || 5000;


app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', createEngine())


// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'dist')));

app.all('*', function(req, res){
  res.sendFile(__dirname + '/dist/index.html');
});

// app.get('/', (req, res, next) => {
//   res.render('index.jsx', { beach: 'Porto' });
// });

// app.all('*', function(req, res){
//   res.send({hello: 'hello man'});
// });

app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});