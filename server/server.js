const { EADDRINUSE } = require('constants');
const http=require('http');

var server=http.createServer(function (req,res){
    res.writeHead(200, {'Content-type' : 'application/json'});
    var miObj={
        nombre:'pepe',
        trabajo:'programador',
        edad:35
    }
    res.end(JSON.stringify(miObj));
});

server.listen(3000, '127.0.0.1');