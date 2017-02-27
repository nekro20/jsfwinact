var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  jsonfile = require('jsonfile');

console.log('find cats');

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({
  extended: true
}));

app.get('/api/cats', function(req, res) {
  jsonfile.readFile('./src/assets/cats.json', function (err, data) {
    if(err) throw err;
    res.send(data);
  });
});

app.use(express.static(__dirname + '/'));
app.listen(4001, function() {
    console.log('Example app listening on port 4001')
  });
