let gniazdo;

function inicjuj(url) {
    gniazdo = new WebSocket(url);
    console.log('Nawiązywanie połączenia...');
}

function zarejestrujObslugeOtwarcia(funkcjaObslugi) {
    gniazdo.onopen = () => {
        console.log('nawiązanie');
        funkcjaObslugi();
    }
}

function zarejestrujObslugeKomunikatu(funkcjaObslugi) {
    gniazdo.onmessage = (e) => {
        console.log('komunikat', e.data);
        let dane = JSON.parse(e.data);
        funkcjaObslugi(dane);
    }
}

function wyslijKomunikat(zawartosc) {
    gniazdo.send(JSON.stringify(zawartosc));
}

export default {
    inicjuj,
    zarejestrujObslugeOtwarcia,
    zarejestrujObslugeKomunikatu,
    wyslijKomunikat
}