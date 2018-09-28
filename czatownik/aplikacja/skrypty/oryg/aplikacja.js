import gniazdo from "./ws-klient";

//Moduł zdefinowany jako class
//To jest definicja
class CzatAplikacja {
    //Za pomocą konstruktora tworzę instancję modułu
    //Aby stworzyć nową instncję tego modułu trzeba użyć konstruktora
    //Przykładowe użycie konstruktora new CzatAplikacja();
    constructor() {
        gniazdo.inicjuj('ws://localhost:3001');
    }
}
export default CzatAplikacja;

class CzatKomunikat {
    constructor({komunikat: k, uzytkownik: u='Andrzej', czas: c=new Date().getTime()}) {
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