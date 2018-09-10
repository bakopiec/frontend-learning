(function(window) {
    'use strict';

    var SELEKTOR_FORMULARZA = '[data-zamowienie="formularz"]';
    var SELEKTOR_LISTY_ZAMOWIEN = '[data-zamowienie="listaZamowien"]';
    
    var Aplikacja = window.Aplikacja;
    var BazaDanych = Aplikacja.BazaDanych;
    var Furgonetka = Aplikacja.Furgonetka;
    var ObslugaFormularza = Aplikacja.ObslugaFormularza;
    var Weryfikacja = Aplikacja.Weryfikacja;
    var ListaZamowien = Aplikacja.ListaZamowien;

    var webshim = window.webshim;
    webshim.polyfill('forms forms-ext');
    webshim.setOptions('forms', {addValidators: true, lazyCustomMessages: true});

    var listaZamowien = new ListaZamowien(SELEKTOR_LISTY_ZAMOWIEN);
    var obslugaFormularza = new ObslugaFormularza(SELEKTOR_FORMULARZA);
    var mojaFurgonetka = new Furgonetka('ncc-1701', new BazaDanych());
    obslugaFormularza.dodajObslugeWysylki(
            function(dane) {
                mojaFurgonetka.zlozZamowienie.call(mojaFurgonetka, dane);
                listaZamowien.dodajWiersz.call(listaZamowien, dane);
            });
    console.log(obslugaFormularza);
    listaZamowien.dodajObslugeKlikniecia(
        mojaFurgonetka.zrealizujZamowienie.bind(mojaFurgonetka));
    obslugaFormularza.dodajObslugeZnaku(
        Weryfikacja.czyAdresFirmowy, Weryfikacja.czyBezkofeinowaIMoc20);

    window.mojaFurgonetka = mojaFurgonetka; 
})(window);