var http = require('http');
var fs = require('fs');
var wyodrebnienie = require('./wyodrebnienie');
var obsluzBlad = require('./obsluz-blad');
var sws = require('./serwer-websocket');

var server = http.createServer(function(zapytanie, odpowiedz) {
    console.log('Odpowiedź na zapytanie');
    var sciezkaPliku = wyodrebnienie(zapytanie.url);
    fs.readFile(sciezkaPliku, function(blad, dane) {
        if (blad) {
            obsluzBlad(blad, odpowiedz);
            return;
        } else {
            odpowiedz.setHeader('Content-Type', 'text/html');
            odpowiedz.end(dane);
        }
    });
});
server.listen(3000);