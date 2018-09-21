var obsluzBlad = function(blad, odpowiedz) {
    odpowiedz.writeHead(404);
    odpowiedz.end('Nie znaleziono pliku');
};

module.exports = obsluzBlad;