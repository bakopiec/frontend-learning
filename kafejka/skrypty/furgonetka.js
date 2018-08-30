(function(window) {
    'use strict';

    var aplikacja = window.Aplikacja || {};

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
        this.bazaDanych.usun(idKlienta);
    }

    Furgonetka.prototype.drukujZamowienie = function() {
        var tablicaKlientow = Object.keys(this.bazaDanych.pobierzWszystko());
        console.log('Furgonetka nr ' + this.identyfikator + ' ma niezrealizowane zamówienia:');
        tablicaKlientow.forEach(function(id) {
            console.log(this.bazaDanych.pobierz(id));
        }.bind(this));
    }

    aplikacja.Furgonetka = Furgonetka;
    window.Aplikacja = aplikacja;
})(window);