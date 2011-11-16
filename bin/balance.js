#! /usr/bin/env node

var program = require('commander'),
  balance = require('../lib/balance');
  
function split(val){
  var values = [];
  var _vals = val.split(",");
  for(var i in _vals){
    values.push(_vals[i].replace(/^[\s\t\0]{1,}/,"").replace(/[\s\t\0]{1,}$/,""))
  }
 return values; 
}

program
  .version(balance.version)
  .option('-p --port [port]', 'the port to start the load balancer on', '8080')
	.option('-u --upstream <upstream>', 'a comma separated list of upstream hosts or ports e.g localhost:3001,localhost:3002 or 3001,3002', split)
  .parse(process.argv);

balance.start(
  {
    port: parseInt(program.port),
    upstream: program.upstream
  }
);