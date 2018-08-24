(function(window) {
    'use strict';

    var aplikacja = window.aplikacja || {};

    function Furgonetka(identyfikator, bazaDanych) {
        this.identyfikator = identyfikator;
        this.bazaDanych = bazaDanych;
    }

    Furgonetka.prototype.zlozZamowienie = function(zamowinie) {
        console.log('Złożenie zamówienia dla ' + zamowinie.email);
        this.bazaDanych.dodaj(zamowinie.email, zamowinie);
    }

    Furgonetka.prototype.zrealizujZamowienie = function(idKlienta){
        console.log('Zrealizowane zamówienie dla klienta ' + idKlienta);
        this,this.bazaDanych.usun(idKlienta);
    }

    aplikacja.Furgonetka = Furgonetka;
    window.aplikacja = aplikacja;
})(window);