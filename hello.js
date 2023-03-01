var http = require('http');
var fs = require('fs');
var port = 8080;
var url = require('url');


http.createServer(function(req, res) {
    var q = url.parse(req.url, true);
    var filename = "."+q.pathname;

    if (filename == './') {
        filename = './index';
    }

    filename = filename + '.html';

    console.log(filename);

    fs.readFile(filename, function(err, data) {

        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 not found")
        }

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end(); 
    });
}).listen(port);


console.log('Server listening on Port '+port);