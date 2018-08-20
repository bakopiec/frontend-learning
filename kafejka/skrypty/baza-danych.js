(function(window) {
    'use strict';

    var aplikacja = window.aplikacja || {};

    function bazaDanych() {
        console.log('wywołanie funkcj bazaDanych');
    }

    aplikacja.bazaDanych = bazaDanych;
    window.aplikacja = aplikacja;
})(window);