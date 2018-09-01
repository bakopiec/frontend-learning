(function(window) {
    'use strict';

    var SELEKTOR_FORMULARZA = '[data-zamowienie="formularz"]';
    var Aplikacja = window.Aplikacja;
    var BazaDanych = Aplikacja.BazaDanych;
    var Furgonetka = Aplikacja.Furgonetka;
    var ObslugaFormularza = Aplikacja.ObslugaFormularza;
    var obslugaFormularza = new ObslugaFormularza(SELEKTOR_FORMULARZA);
    var mojaFurgonetka = new Furgonetka('ncc-1701', new BazaDanych());
    obslugaFormularza.dodajObslugeWysylki(
        mojaFurgonetka.zlozZamowienie.bind(mojaFurgonetka));
    console.log(obslugaFormularza);
    window.mojaFurgonetka = mojaFurgonetka; 
})(window);