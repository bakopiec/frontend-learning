import Route from '@ember/routing/route';

export default Route.extend({
    model(parametry) {
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
        
        if (rekord1.id == parametry.stwor_id) {
            return rekord1;
        } else if (rekord2.id == parametry.stwor_id) {
            return rekord2;
        } else if (rekord3.id == parametry.stwor_id) {
            return rekord3;
        } else {
            return rekord4;
        }
    }
});
