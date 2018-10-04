import $ from 'jquery';
import md5 from 'crypto-js/md5';

function utworzUrlGravatara(uzytkownik) {
    let hash = md5(uzytkownik);
    return `http://www.gravatar.com/avatar/${hash.toString()}`;
}

export function wprowadzNazweUzytkownika() {
    let uzytkownik = prompt('Podaj nazwę użytkownika');
    return uzytkownik.toLowerCase();
}

export class CzatFormularz {
    constructor(selFormularza, selPola) {
        this.$formularz = $(selFormularza);
        this.$pole = $(selPola);
    }
    
    inicjuj(funkcjaSubmit) {
        this.$formularz.submit((zdarzenie) => {
            zdarzenie.preventDefault();
            let wartosc = this.$pole.val();
            funkcjaSubmit(wartosc);
            this.$pole.val('');
        });
        this.$formularz.find('button').on('click', () => this.$formularz.submit());
    }
}

export class CzatLista {
    constructor(selListy, uzytkownik) {
        this.$lista = $(selListy);
        this.uzytkownik = uzytkownik;
    }

    wyswietlKomunikat({uzytkownik: u, czas: c, komunikat: k}) {
        let $wierszKomunikatu = $('<li>', {
            'class': 'wiersz-komunikatu'
        });
        if (this.uzytkownik === u) {
            $wierszKomunikatu.addClass('ja');
        }
        let $komunikat = $('<p>');
        $komunikat.append($('<span>', {
            'class': 'komunikat-uzytkownik',
            text: u
        }));
        $komunikat.append($('<span>', {
            'class': 'czas',
            'data-czas': c,
            text: new Date(c).getTime()
        }));
        $komunikat.append($('<span>', {
            'class': 'komunikat-komunikat',
            text: k
        }));
        let $obraz = $('<img>', {
            src: utworzUrlGravatara(u),
            title: u
        });
        $wierszKomunikatu.append($obraz);
        $wierszKomunikatu.append($komunikat);
        $(this.$lista).append($wierszKomunikatu);
        $wierszKomunikatu.get(0).scrollIntoView();
    }
}
