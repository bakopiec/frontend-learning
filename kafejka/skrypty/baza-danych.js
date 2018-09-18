(function(window) {
    'use strict';

    var aplikacja = window.Aplikacja || {};
    var Obietnica = window.Promise;

    function akceptacjaObietnicy(wartosc) {
        var obietnica = new Obietnica(function(akceptuj, odrzuc) {
            akceptuj(wartosc);
        });
        return obietnica;
    }

    function BazaDanych() {
        this.dane = {};
    }

    BazaDanych.prototype.dodaj = function(klucz, wartosc) {
        this.dane[klucz] = wartosc;
        return akceptacjaObietnicy(null);
    }

    BazaDanych.prototype.pobierz = function(klucz) {
        var wartosc = this.dane[klucz];
        return akceptacjaObietnicy(wartosc);
    }

    BazaDanych.prototype.pobierzWszystko = function() {
        return akceptacjaObietnicy(this.dane);
    }
    
    BazaDanych.prototype.usun = function(klucz) {
        delete this.dane[klucz];
        return akceptacjaObietnicy(null);
    }

    aplikacja.BazaDanych = BazaDanych;
    window.Aplikacja = aplikacja;
})(window);