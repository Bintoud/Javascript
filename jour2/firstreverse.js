'use strict'

/* j'écrie ma fonction prenant en paramète un string
qui nous renverra cette string en ordre inverse;
ex : konexio / output oixenok;
*La propriété length représente la longueur d'une chaine de caractères
La méthode charAt() renvoie une nouvelle chaîne contenant le caractère
(ou, plus précisément, le point de code UTF-16) à la position indiquée en argument.
*/


function firstreverse(str) {
    var result = ('');

    for (var i = str.length; i >= 0; i--) {

        result += str.charAt(i);

    }

    return result;

}

console.log(firstReverse('Hello World and Coders'));
console.log(firstReverse('konexio'));
console.log(firstReverse('I Love Code'));

