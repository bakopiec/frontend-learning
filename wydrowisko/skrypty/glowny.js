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

function obrazMiniatury(miniatura) {
    'use strict';
    var nazwaAtrybutu = miniatura.getAttribute('data-url-obrazu');
    return nazwaAtrybutu;
}

function tytulMiniatury(miniatura) {
    'use strict';
    var nazwaAtrybutu = miniatura.getAttribute('data-tytul-obrazu');
    return nazwaAtrybutu;
}

function zmienObrazNaPodstawieMiniatury(miniatura) {
    'use strict';
    var urlObrazu = obrazMiniatury(miniatura);
    var tytulObrazu = tytulMiniatury(miniatura);
    zmienObraz(urlObrazu, tytulObrazu);
}

// var LITERY = 'abc';
// var nic;
// var cyfra1 = 3;
// var cyfra2 = 45;
// var cyfra3 = 12;
// var cyfra4 = 50;
// var negatywna = false;
// var pozytywna = true;
// var zmienoprzecinkowa = 1.4;
// var suma = 'suma 2 cyfr wynosi : ' + (cyfra1 + cyfra2);
// suma = 'abc';
// console.log(suma);

// var a = 12;
// var b = 126;

// if (a > b) {
//     log('a jest większe od b');
// } else {
//     log('a jest mniejsze lub równe b');
// }

// function log(napis) {
//     console.log(napis);
// }
// function log1() {
//     console.log('log z funkcji log1');
// }

// log('drzewa szumią');
// log1();

// function dodajDwieLiczby(cyfra1, cyfra2) {
//     var sum = cyfra1 + cyfra2;
//     console.log(sum);    
// }

// dodajDwieLiczby(3, 45);
// dodajDwieLiczby(5, 35);

// function odejmijDwieLiczby(cyfra1, cyfra2) {
//     var ile = cyfra1 - cyfra2;
//     console.log('wynik odejmowania wynosi'  + ile);
// }

// odejmijDwieLiczby(39, 20);
// odejmijDwieLiczby(50, 20);

// function log3(tytuł){
//     console.log(tytuł);
// }

// log3('natura');
// log3('zwierzeta');
// log3('przyroda');
// log('jest pięknie');
// dodajDwieLiczby(12, 12)

// function dodajLiczby(cyfra1, cyfra2, cyfra3) {
//     var suma3 = cyfra1 + cyfra2 + cyfra3;
//     console.log('suma cyfr wynosi' + suma3);
// }

// dodajLiczby(5, 5, 5);

// var a = 10
// var b = -10

// if (a > 0) {
//     log('a jest większe od zera');
// } else {
//     log('b jest mniejsze od zera');    
// }
// if (a < 0,b < 0) {
//     log('a jest mniejsze od zera');
// } else {
//     log('b jest mniejsze od zera');    
// }

// if (b > 0) {
//     log('b jest mniejsze od zera');
// }

// //**********************************************************
// function odejmijLiczby(cyfra1, cyfra2) {
//     if (cyfra1 >= cyfra2) {
//         odejmijDwieLiczby(cyfra1, cyfra2);
//     } else {
//         console.log('pierwsza cyfra jest mniejsza od drugiej');
//     }
// }

// odejmijLiczby(20, 10);
// odejmijLiczby(15, 30);
// odejmijLiczby(10, 10);
// odejmijLiczby(16, 48);

// function pomnóżLiczby(cyfra1, cyfra2,cyfra3) {
//     var wynik = (cyfra1 * cyfra2 * cyfra3);
//     console.log('wynik działania wynosi'  + wynik);
// }

// pomnóżLiczby(5, 8, 12);
// pomnóżLiczby(1, 12, 0);

// function pomnóżNawiasDodaj(cyfra1, cyfra2, cyfra3) {
//     var pomnóż = ((cyfra1 * cyfra2) + cyfra3);
//     console.log('suma wynosi ' + pomnóż);
// }

// pomnóżNawiasDodaj(7, 4, 7);

// //***********************************************************************

// var person = {
//     name : 'Natalia',
//     surname : 'Kopiec',
//     age : 19,
//     print : function() {
//         console.log(this.name + ' ' + this.surname + ' ' + this.age);
//     },
//     pomnozNawiasDodaj : function(cyfra1, cyfra2, cyfra3) {
//         var pomnóż = ((cyfra1 * cyfra2) + cyfra3);
//         console.log('suma wynosi ' + pomnóż);
//     }
// }

// log(person);
// log(person.age);

// person.age = 20;

// log(person.age);
// person.print();
// person.pomnozNawiasDodaj(8, 2, 3);

// var car = {
//     model : 'Fiat',
//     coulour : 'red',
//     year : 2001,
//     print : function() {
//         console.log(this.model + ' ' + this.coulour + ' ' + this.year);
//     }
// }

// car.print();

// var kraj = {
//     nazwa : 'Polska',
//     stolica : 'Warszawa',
//     powierzchnia : 29600,
//     flaga : 'biało  czerwona',
//     godlo : 'orzel',
//     print : function() {
//         console.log(this.nazwa + ' ' + this.stolica + ' ' + this.powierzchnia + ' ' + this.flaga + ' ' + this.godlo);
//     }   
// }

// kraj.print();
// car.print();

// log(kraj.nazwa);

// kraj.nazwa = 'Wegry';

// log(kraj.nazwa);
// kraj.print();

// log(kraj.nazwa);
// kraj.nazwa = 'Polska';
// kraj.print();


// var zwierzeta = {
//     nazwa : 'wydra',
//     srodowisko : 'woda',
//     pozywienie : 'rosliny',
//     tryb : 'nocny',
//     print : function () {
//         var nazwa = 'abc';
//         console.log(this.nazwa + ' ' + this.srodowisko + ' ' + this.pozywienie + ' ' + this.tryb);
//     }

// }

// zwierzeta.print();

// //*************************************************************

// function dodaj(cyfra1, cyfra2) {
//     var suma = cyfra1 + cyfra2;
//     return suma; 
// }
// suma = dodaj(3, 3);
// log(suma);



// function polacz(napis1, napis2) {
//     var zdanie = napis1 + napis2;
//     return zdanie;
// }

// var wyrazy = polacz('sdklf', 'lskdjf');
// log(wyrazy);


// function wykonajDzałania(cyfra1, cyfra2, cyfra3, cyfra4) {
//     var dodaj1 = cyfra1 + cyfra4;
//     var pomnoz1 = cyfra2 * cyfra3;
//     var odejmij = cyfra3 - cyfra2;
//     var pomnoz2 = cyfra4 * cyfra4;
//     console.log('suma wynosi' + dodaj1);
//     console.log('suma mnożenia' + pomnoz1);
// }
// wykonajDzałania(3, 5, 6, 7);
