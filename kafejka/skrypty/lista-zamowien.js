(function(window) {
    'use strict';

    var aplikacja = window.Aplikacja || {};
    var $ = window.jQuery;

    function ListaZamowien(selektor) {
        if (!selektor) {
            throw Error('Brak selektora');
        }
        this.$selektor = $(selektor);
        if (this.$selektor.length === 0) {
            throw Error('Brak elementów odpowiadających selektorowi: ' + selektor);
        }
    }

    aplikacja.ListaZamowien = ListaZamowien;
    window.Aplikacja = aplikacja;
})(window);