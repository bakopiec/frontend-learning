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

    ListaZamowien.prototype.dodajWiersz = function(zamowienie) {
        var elementWiersza = new Wiersz(zamowienie);
        this.$element.append(elementWiersza.$element);        
    }

    function Wiersz(zamowienie) {
        var $div = $('<div></div>', {
            'data-zamowienie': 'pole wyboru',
            'class': 'checkbox'
        });
        var $etykieta = $('<label></label>');
        var $poleWyboru = $('<input></input>', {
            type: 'checkbox',
            value: zamowienie.adresEmail
        });
        var opis = zamowienie.wielkosc + ' ';
        if (zamowienie.smak) {
            opis += zamowienie.smak + ' ';
        }
        opis += zamowienie.kawa + ', ';
        opis += '(' + zamowienie.adresEmail + ')';
        opis += '[' + zamowienie.moc + 'x]';

        $etykieta.append($poleWyboru);
        $etykieta.append(opis);
        $div.append($etykieta);

        this.$element = $div;
    }

    aplikacja.ListaZamowien = ListaZamowien;
    window.Aplikacja = aplikacja;
})(window);