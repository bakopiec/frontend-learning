import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
    imie: DS.attr('string'),
    nazwisko: DS.attr('string'),
    email: DS.attr('string'),
    obserwacje: DS.hasMany('obserwacja'),
    imieNazwisko: computed('imie', 'nazwisko', function() {
        return this.get('imie') + ' ' + this.get('nazwisko');
    })
});
