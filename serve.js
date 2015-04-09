var express = require('express');
var path = require( 'path' );
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var _ = require('lodash');

app.use( express.static( 'node_modules' ) );
app.use( express.static( 'dist' ) );
app.use( express.static( 'src' ) );
app.use(bodyParser.json());

app.get( '/', function( req, res ) {
  res.sendFile( path.join( __dirname + '/index.html' ) );
});

app.put('/fake_data.json', function(req, res) {
  _.map(req.body, function( item ) {
    delete item.$$hashKey;
  });
  fs.writeFile('dist/fake_data.json', JSON.stringify(req.body, null, 2));
});


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

