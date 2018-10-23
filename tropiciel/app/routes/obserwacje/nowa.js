import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return Ember.RSVP.hash({
            obserwacja: this.store.createRecord('obserwacja'),
            stwory: function() {
                let rekord1 = this.store.createRecord('swiadek', {
                    imie: 'Jan',
                    nazwisko: 'Nowak',
                    email: 'jan.nowak@gmail.com'
                });
                let rekord2 = this.store.createRecord('swiadek', {
                    imie: 'Piotr',
                    nazwisko: 'Kowalski',
                    email: 'piotr.kowalski@gmail.com'
                });
                let rekord3 = this.store.createRecord('swiadek', {
                    imie: 'Joanna',
                    nazwisko: 'Wiśniewska',
                    email: 'joanna.wisniewska@gmail.com'
                });
                return [rekord1, rekord2, rekord3];
            },
            swiadkowie: function() {
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
    }
});
