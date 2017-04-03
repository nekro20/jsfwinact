var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    jsonfile = require('jsonfile');

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({
    extended: true
}));

app.get('/cats', function(req, res) {
    jsonfile.readFile('data/cats.json', function (err, data) {
        if(err) throw err;
        res.send(data);
    });
});

app.use(express.static(__dirname + '/'));
app.listen(8888, function() {
    console.log('Application url: http://localhost:8888/#/search')
});