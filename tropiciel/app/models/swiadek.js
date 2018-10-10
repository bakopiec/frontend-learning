import DS from 'ember-data';

export default DS.Model.extend({
    imie: DS.attr('string'),
    nazwisko: DS.attr('string'),
    email: DS.attr('string'),
    obserwacje: DS.hasMany('obserwacja')
});
