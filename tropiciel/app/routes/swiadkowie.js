import Route from '@ember/routing/route';

export default Route.extend({
    model() {
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
    }
});
