(function(window) {
    'use strict';

    var aplikacja = window.Aplikacja || {};

    function Furgonetka(identyfikator, bazaDanych) {
        this.identyfikator = identyfikator;
        this.bazaDanych = bazaDanych;
    }

    Furgonetka.prototype.zlozZamowienie = function(zamowinie) {
        console.log('Złożenie zamówienia dla ' + zamowinie.email);
        return this.bazaDanych.dodaj(zamowinie.email, zamowinie);
    }

    Furgonetka.prototype.zrealizujZamowienie = function(idKlienta){
        console.log('Zrealizowane zamówienie dla klienta ' + idKlienta);
        return this.bazaDanych.usun(idKlienta);
    }

    Furgonetka.prototype.drukujZamowienie = function(funkcjaDrukujaca) {
        return this.bazaDanych.pobierzWszystko().then(function(zamowienia) {
            var tablicaKlientow = Object.keys(zamowienia);
            console.log('Furgonetka nr ' + this.identyfikator + ' ma niezrealizowane zamówienia:');
            tablicaKlientow.forEach(function(id) {
                console.log(zamowienia[id]);
                var zamowienie = zamowienia[id];
                if (funkcjaDrukujaca) {
                    funkcjaDrukujaca(zamowienie);
                }
            }.bind(this));
        }.bind(this));
    }

    aplikacja.Furgonetka = Furgonetka;
    window.Aplikacja = aplikacja;
})(window);