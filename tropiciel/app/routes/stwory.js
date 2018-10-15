import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        let rekord1 = {
            id: 0,
            nazwa: 'Drakula',
            typStwora: 'chupacabra',
            zdjecie: 'obrazy/chupacabra.png'
        };
        let rekord2 = {
            id: 1,
            nazwa: 'Dżon',
            typStwora: 'kowboj',
            zdjecie: 'obrazy/kowboj.png'
        };
        let rekord3 = {
            id: 2,
            nazwa: 'Kunegunda',
            typStwora: 'potwór z loch nes',
            zdjecie: 'obrazy/loch_ness.png'
        };
        let rekord4 = {
            id: 3,
            nazwa: 'Horpyna',
            typStwora: 'wielka stopa',
            zdjecie: 'obrazy/wielka_stopa.png'
        };
        return [rekord1, rekord2, rekord3, rekord4];
    }
});
