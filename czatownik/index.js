var http = require('http');

var server = http.createServer(function(zapytanie, odpowiedz) {
    console.log('Odpowiedź na zapytanie');
    odpowiedz.end('<h1>Witaj, mój świecie</h1>');
});
server.listen(3000);