var http = require('http');
var fs = require('fs');
var path = require('path');

var server = http.createServer(function(zapytanie, odpowiedz) {
    console.log('Odpowiedź na zapytanie');
    var url = zapytanie.url;
    var nazwaPliku = 'index.html';
    if (url.length > 1) {
        nazwaPliku = url.substring(1);
    }
    console.log(nazwaPliku);
    var sciezkaPliku = path.resolve(__dirname, 'aplikacja', nazwaPliku);
    fs.readFile(sciezkaPliku, function(blad, dane) {
        odpowiedz.end(dane);
    });
});
server.listen(3000);