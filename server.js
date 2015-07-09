var http = require('http');
var express = require('express');
var path = require('path');
var errorHandler = require('errorhandler');
var app = express();

app.set('port', 8000);

app.use(express.static(path.join(__dirname, 'build/development')));

app.get('favicon.ico', function(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'} );
  res.write('No favicon');
  res.end();
})

app.get('/test', function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'} );
  res.write('test response');
  res.end();
})

// error handling middleware should be loaded after the loading the routes
if ('development' == app.get('env')) {
  app.use(errorHandler());
}

var server = module.exports = http.createServer(app);
server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
