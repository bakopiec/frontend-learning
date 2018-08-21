(function(window) {
    'use strict';

    var aplikacja = window.aplikacja || {};

    function BazaDanych() {
        this.dane = {};
    }

    BazaDanych.prototype.dodaj = function(klucz, wartosc) {
        this.dane[klucz] = wartosc;
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
    window.aplikacja = aplikacja;
})(window);