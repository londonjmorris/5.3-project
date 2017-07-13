var express = require('express');
var mustacheExpress = require('mustache-express');
var todoController = require('./controllers/todoController');
var path = require('path');
var bodyParser = require('body-parser');
var parseurl = require('parseurl');

var app = express();

app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('./public'));


todoController(app);

app.listen(3000);
console.log('Listening to port 3000.');
