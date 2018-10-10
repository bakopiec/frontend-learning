import DS from 'ember-data';

export default DS.Model.extend({
    miejsce: DS.attr('string'),
    dataUtworzenia: DS.attr('date'),
    dataObsrwacji: DS.attr('date'),
    stwor: DS.belongsTo('stwor'),
    swiadkowie: DS.belongsTo('swiadek')
});
