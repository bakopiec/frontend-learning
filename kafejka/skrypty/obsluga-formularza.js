(function(window) {
    'use strict';

    var aplikacja = window.Aplikacja || {};
    var $ = window.jQuery;

    function ObslugaFormularza(selektor) {
        if (!selektor) {
            throw new Error('Brak selektora');
        }
        this.$elementFormularza = $(selektor);
        if (this.$elementFormularza.length === 0) {
            throw new Error('Brak elementów odpowiadających selektorowi: ' + selektor);
        }
    }
    
    ObslugaFormularza.prototype.dodajObslugeWysylki = function(fn) {
        console.log('Utworzenie obsługi zdarzenia submit formularza');
        this.$elementFormularza.on('submit', function(zdarzenie) {
            zdarzenie.preventDefault();
            var dane = {};
            $(this).serializeArray().forEach(function(element) {
                dane[element.name] = element.value;
                console.log('Element ' + element.name + ' ma wartość ' + element.value);
            });
            console.log(dane);
            fn(dane).then(function() {
                this.reset();
                this.elements[0].focus();
            }.bind(this));
        });
    }

    ObslugaFormularza.prototype.dodajObslugeZnaku = function(fn, fn1) {
        console.log('Utworzenie obsługi zdarzenia input formularza');
        this.$elementFormularza.on('input', '[name="email"]', function(zdarzenia) {
            var email = zdarzenia.target.value;
            var komunikat = '';
            if (fn(email)) {
                $(zdarzenia.target).setCustomValidity('');
            } else {
                komunikat = 'Adres ' + email + ' nie jest dozwolony!';
                $(zdarzenia.target).setCustomValidity(komunikat);
            }
        });
    }

    aplikacja.ObslugaFormularza = ObslugaFormularza;
    window.Aplikacja = aplikacja;
})(window);