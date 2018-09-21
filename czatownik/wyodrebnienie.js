var path = require('path');

var wyodrebnijSciezke = function(url) {
    var sciezkaPliku;
    var nazwaPliku = 'index.html';
    if (url.length > 1) {
        nazwaPliku = url.substring(1);
    }
    console.log('Nazwa pliku: ' + nazwaPliku);
    var sciezkaPliku = path.resolve(__dirname, 'aplikacja', nazwaPliku);
    return sciezkaPliku;
};

module.exports = wyodrebnijSciezke;