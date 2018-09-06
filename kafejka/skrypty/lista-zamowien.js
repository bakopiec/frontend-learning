(function(window) {
    'use strict';

    var aplikacja = window.Aplikacja || {};
    var $ = window.jQuery;

    function ListaZamowien(selektor) {
        if (!selektor) {
            throw Error('Brak selektora');
        }
        this.$element = $(selektor);
        if (this.$element.length === 0) {
            throw Error('Brak elementów odpowiadających selektorowi: ' + selektor);
        }
    }

    ListaZamowien.prototype.dodajObslugeKlikniecia = function(fn) {
        this.$element.on('click', 'input', function(zdarzenie) {
            var email = zdarzenie.target.value;
            this.usunWiersz(email);
            fn(email);
        }.bind(this));
    }

    ListaZamowien.prototype.dodajWiersz = function(zamowienie) {
        this.usunWiersz(zamowienie.email);
        var elementWiersza = new Wiersz(zamowienie);
        this.$element.append(elementWiersza.$element);        
    }

    ListaZamowien.prototype.usunWiersz = function(email) {
        this.$element
                .find('[value="' + email + '"]')
                .closest('[data-zamowienie="poleWyboru"]')
                .remove();
    }

    function Wiersz(zamowienie) {
        var $div = $('<div></div>', {
            'data-zamowienie': 'poleWyboru',
            'class': 'checkbox'
        });
        var $etykieta = $('<label></label>');
        var $poleWyboru = $('<input></input>', {
            type: 'checkbox',
            value: zamowienie.email
        });
        var opis = zamowienie.wielkosc + ' ';
        if (zamowienie.smak) {
            opis += zamowienie.smak + ' ';
        }
        opis += zamowienie.kawa + ', ';
        opis += '(' + zamowienie.email + ')';
        opis += '[' + zamowienie.moc + 'x]';

        $etykieta.append($poleWyboru);
        $etykieta.append(opis);
        $div.append($etykieta);

        this.$element = $div;
    }

    aplikacja.ListaZamowien = ListaZamowien;
    window.Aplikacja = aplikacja;
})(window);