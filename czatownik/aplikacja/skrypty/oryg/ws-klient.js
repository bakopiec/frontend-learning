let gniazdo;

function inicjuj(url) {
    gniazdo = new WebSocket(url);
    console.log('Nawiązywanie połączenia...');
}

export default {
    inicjuj
}