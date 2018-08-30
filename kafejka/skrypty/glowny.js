(function(window) {
    'use strict';

    var Aplikacja = window.Aplikacja;
    var BazaDanych = Aplikacja.BazaDanych;
    var Furgonetka = Aplikacja.Furgonetka;
    var mojaFurgonetka = new Furgonetka('ncc-1701', new BazaDanych());
    window.mojaFurgonetka = mojaFurgonetka; 
})(window);