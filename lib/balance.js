var http = require('http'),
  httpProxy = require('http-proxy'),
  _ = require('underscore');
  
exports.version = "0.0.1";

exports.start = function(options){
  var defaults = {
    port: 8080,
    host: "localhost",
    upstream_host: "localhost",
    upstream: []
  };
  var config = _.extend({}, defaults, options);
  if(config.upstream.length == 0){
    console.log("You must provide at least one port to forward traffic to!");
  }
  else{
    var routes = build_routes(config);

    // http://gernot-it.blogspot.com/2011/06/simple-loadbalancer-with-nodejs-https.html
    console.log("proxy routes: ", routes);
    httpProxy.createServer(function (req, res, proxy) {
      var target = routes.shift();
      proxy.proxyRequest(req, res, target);
      routes.push(target);
    }).listen(config.port); 
  }
};

function build_routes(config){
  var routes = [];
  _.each(config.upstream, function(host){
    var host_with_port = host.split(":");
    if(host_with_port.length == 1){
      routes.push({host:config.upstream_host, port:host})
    }
    else{
      routes.push({host:host_with_port[0], port:host_with_port[1]});
    }
  });
  return routes;
}