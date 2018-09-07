(function(window) {
    'use strict';

    var aplikacja = window.Aplikacja || {};

    var Weryfikacja = {
        czyAdresFirmowy: function(email) {
            return /.+@helion\.pl$/.test(email);
        }
    };

    aplikacja.Weryfikacja = Weryfikacja;
    window.Aplikacja = aplikacja;
})(window);