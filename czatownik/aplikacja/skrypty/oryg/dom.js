import $ from 'jquery';

export class CzatFormularz {
    constructor(selFormularza, selPola) {
        this.$formularz = $(selFormularza);
        this.$pole = $(selPola);
    }
    
    inicjuj(funkcjaSubmit) {
        this.$formularz.submit((zdarzenie) => {
            zdarzenie.preventDefault();
            let wartosc = this.$pole.val();
            funkcjaSubmit(wartosc);
            this.$pole.val('');
        });
        this.$formularz.find('button').on('click', () => this.$formularz.submit());
    }
}
