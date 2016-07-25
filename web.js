var express = require('express');
var app     = express();
var os      = require('os');

var PORT = process.env.PORT || 3000;

module.exports = function(clusterId) {
  
  app.get('/', function(req, res) {
    res.send(`Host: ${os.hostname()}, Cluster: ${}`);
  });
  
  app.listen(PORT, function() {
    console.log('Listening on %s', process.env.PORT);
  });
  
}
