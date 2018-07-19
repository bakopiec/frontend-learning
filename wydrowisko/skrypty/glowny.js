var SELEKTOR_DUZEGO_OBRAZU = '[data-typ-obrazu="cel"]';
var SELEKTOR_TYTULU_OBRAZU = '[data-typ-obrazu="tytul"]';
var SELEKTOR_MINIATURY = '[data-typ-obrazu="wyzwalacz"]';

function zmienObraz(urlObrazu, tekstTytulu) {
    'use strict';
    var duzyObraz = document.querySelector(SELEKTOR_DUZEGO_OBRAZU);
    duzyObraz.setAttribute('src', urlObrazu);
    var tytulObrazu = document.querySelector(SELEKTOR_TYTULU_OBRAZU);
    tytulObrazu.textContent = tekstTytulu;
}