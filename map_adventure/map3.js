'use strict'

var arr = ['m', 'n', 'o', 'p'];

var arr2 = arr.map(function (maj) {

    return maj.toUpperCase();
});

console.log(arr2);

/* ligne 4 et 5
je crée une var arr2 qui stock mon array (var arr)
 j'utilise mon tableau (arr) avec la méthode .map() qui vas prendre en paramètre
 une fonction de callback qui prend en parametre un élément(maj)
 dans mon array fonction  je retourne mon élément (maj) qui mettra en majuscule chaque lettre
 de mon array */