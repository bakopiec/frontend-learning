(function(window) {
    'use strict';

    var SELEKTOR_FORMULARZA = '[data-zamowienie="formularz"]';
    var SELEKTOR_LISTY_ZAMOWIEN = '[data-zamowienie="listaZamowien"]';
    var SCIEZKA_URL = 'http://192.168.1.109:8080/zamowienia';
    
    var Aplikacja = window.Aplikacja;
    var BazaDanych = Aplikacja.BazaDanych;
    var Furgonetka = Aplikacja.Furgonetka;
    var ObslugaFormularza = Aplikacja.ObslugaFormularza;
    var Weryfikacja = Aplikacja.Weryfikacja;
    var ListaZamowien = Aplikacja.ListaZamowien;
    var ZdalnaBazaDanych = Aplikacja.ZdalnaBazaDanych;

    var webshim = window.webshim;
    webshim.polyfill('forms forms-ext');
    webshim.setOptions('forms', {addValidators: true, lazyCustomMessages: true});

    var listaZamowien = new ListaZamowien(SELEKTOR_LISTY_ZAMOWIEN);
    var obslugaFormularza = new ObslugaFormularza(SELEKTOR_FORMULARZA);
    var zdalnaBazaDanych = new ZdalnaBazaDanych(SCIEZKA_URL);
    var mojaFurgonetka = new Furgonetka('ncc-1701', zdalnaBazaDanych);
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