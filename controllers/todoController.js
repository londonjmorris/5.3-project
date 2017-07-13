var bodyParser = require('body-parser');

var data = [];

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({extended: false});
module.exports = function(app){

app.get('/todo', function(req,res) {
 res.render('todo', {todos: data});
});

app.post('/todo', urlencodedParser, function(req,res) {
  data.push(req.body);
  res.render('todo', {todos: data});
});

app.delete('/todo', function(req,res) {

});


};
