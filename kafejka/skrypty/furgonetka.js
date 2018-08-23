(function(window) {
    'use strict';

    var aplikacja = window.aplikacja || {};

    function Furgonetka(identyfikator, bazaDanych) {
        this.identyfikator = identyfikator;
        this.bazaDanych = bazaDanych;
    }

    aplikacja.Furgonetka = Furgonetka;
    window.aplikacja = aplikacja;
})(window);