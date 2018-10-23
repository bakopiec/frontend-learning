import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        zapisz() {
            let self = this;
            this.get('model.obserwacja').save().then(function() {
                self.transitionToRoute('obserwacje');
            });
        },
        anuluj() {}
    }
});
