import gniazdo from './ws-klient';
import {CzatFormularz, CzatLista} from './dom';

const SELEKTOR_FORMULARZA = '[data-czat="czat-formularz"]';
const SELEKTOR_POLA = '[data-czat="pole-komunikatu"]';
const SELEKTOR_LISTY = '[data-czat="lista-komunikatow"]';

//Moduł zdefinowany jako class
//To jest definicja
class CzatAplikacja {
    //Za pomocą konstruktora tworzę instancję modułu
    //Aby stworzyć nową instncję tego modułu trzeba użyć konstruktora
    //Przykładowe użycie konstruktora new CzatAplikacja();
    constructor() {
        this.czatFormularz = new CzatFormularz(SELEKTOR_FORMULARZA, SELEKTOR_POLA);
        this.czatLista = new CzatLista(SELEKTOR_LISTY, 'Andrzej');
        gniazdo.inicjuj('ws://localhost:3001');
        gniazdo.zarejestrujObslugeOtwarcia(() => {
            this.czatFormularz.inicjuj((dane) => {
                let komunikat = new CzatKomunikat({komunikat: dane});
                gniazdo.wyslijKomunikat(komunikat.serializuj());
            });
        });
        gniazdo.zarejestrujObslugeKomunikatu((dane) => {
            console.log(dane);
            let komunikat = new CzatKomunikat(dane);
            this.czatLista.wyswietlKomunikat(komunikat.serializuj());
        });
    }
}
export default CzatAplikacja;

class CzatKomunikat {
    constructor({komunikat: k, uzytkownik: u = 'Andrzej', czas: c = new Date().getTime()}) {
        this.komunikat = k;
        this.uzytkownik = u;
        this.czas = c;
    }

    serializuj() {
        return {
            komunikat: this.komunikat,
            uzytkownik: this.uzytkownik,
            czas: this.czas
        }
    }
}