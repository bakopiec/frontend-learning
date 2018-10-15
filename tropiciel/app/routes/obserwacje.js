import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        let rekord1 = this.store.createRecord('obserwacja', {
            miejsce: 'Szczebrzeszyn',
            dataObserwacji: new Date('2016-11-09')
        });
        let rekord2 = this.store.createRecord('obserwacja', {
            miejsce: 'Pacanów',
            dataObserwacji: new Date('2016-10-14')
        });
        let rekord3 = this.store.createRecord('obserwacja', {
            miejsce: '',
            dataObserwacji: new Date('2016-09-21')
        });
        return [rekord1, rekord2, rekord3];
    }
});
