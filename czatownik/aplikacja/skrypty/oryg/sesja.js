class Sesja {
    constructor(apiSesji) {
        this.api = apiSesji;
    }

    odczytaj() {
        return this.api.getItem(this.klucz);
    }

    zapisz(wartosc) {
        this.api.setItem(this.klucz, wartosc);
    }
}

export class SesjaUzytkownika extends Sesja {
    constructor(klucz) {
        super(sessionStorage);
        this.klucz = klucz;
    }
}