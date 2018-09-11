(function(window) {
    'use strict';

    var aplikacja = window.Aplikacja || {};
    var $ = window.jQuery;

    function ZdalnaBazaDanych(url) {
        if (!url) {
            throw new Error('Brak ścieżki URL.');
        }
        this.sciezkaUrl = url;
    }

    ZdalnaBazaDanych.prototype.dodaj = function(klucz, wartosc) {
        $.post(this.sciezkaUrl, wartosc);
    }

    aplikacja.ZdalnaBazaDanych = ZdalnaBazaDanych;
    window.Aplikacja = aplikacja;
})(window);