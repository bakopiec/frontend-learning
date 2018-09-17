(function(window) {
    'use strict';

    var aplikacja = window.Aplikacja || {};
    var Obietnica = window.Promise;

    function BazaDanych() {
        this.dane = {};
    }

    BazaDanych.prototype.dodaj = function(klucz, wartosc) {
        var obietnica = new Obietnica(function(akceptuj, odrzuc) {
            this.dane[klucz] = wartosc;
            akceptuj(null);
        }.bind(this));
        return obietnica;
    }

    BazaDanych.prototype.pobierz = function(klucz) {
        var wartosc = this.dane[klucz];
        return wartosc;
    }

    BazaDanych.prototype.pobierzWszystko = function() {
        return this.dane;
    }
    
    BazaDanych.prototype.usun = function(klucz) {
        delete this.dane[klucz];
    }

    aplikacja.BazaDanych = BazaDanych;
    window.Aplikacja = aplikacja;
})(window);