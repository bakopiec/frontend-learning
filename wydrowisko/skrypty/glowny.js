var SELEKTOR_DUZEGO_OBRAZU = '[data-typ-obrazu="cel"]';
var SELEKTOR_TYTULU_OBRAZU = '[data-typ-obrazu="tytul"]';
var SELEKTOR_MINIATURY = '[data-typ-obrazu="wyzwalacz"]';

var selektor = document.querySelector(SELEKTOR_DUZEGO_OBRAZU);
console.log(selektor);

var src = selektor.src;
console.log(src);

//selektor.src = 'obrazy/wydra2.jpg';

selektor.setAttribute('src', 'obrazy/wydra2.jpg');