"use strict"


/* un programme doop() qui prend 3 paramètre
    le 1 et le 3 sont des entiers positif;
    le 2 est un opérateur arithméthique (+ - * / ou % ) ;
    Si le nombre d'arguments 'nest pas = à 3 alors le message affichera error;
*/

    var nb1 = parseInt(process.argv[2])  // le [2] correspond a l'index 2(4) de node doop.js 4 + 5 ;
    var nb2 = parseInt(process.argv[4])  // le [4] correspond a l'index 4(5) de node doop.js 4 + 5 ;
    var operation = process.argv[3]      // le [3] correspond a l'index 3(+) de node doop.js 4 + 5 ;

    if (process.argv.length !== 5) {      // si la longueur du nombre est diférent ou egal a 5 = error ; 
        console.log('error')
        return;                           // return permet de stopper la boucle 
    }

    var result;

    if (operation === '+') {             // si mon operation est strictement égale à "+" alors on addition 4 + 5 etc...
        result = nb1 + nb2;
    } else if (operation === '-') {
        result = nb1 - nb2;
    } else if (operation === '*') {
        result = nb1 * nb2;
    } else if (operation === '/') {
        result = nb1 / nb2;
    } else if (operation === '%') {
        result = nb1 % nb2;
    } else {
        console.log('hors zone')
    }

    console.log(result)

    