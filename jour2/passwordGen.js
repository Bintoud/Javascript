'use strict'

/* un mot de passe compris entre 6 et 15 , de maniere aleatoire
    qui sera retourner uniquement de lettres majuscules.
    s-il nest pas compris entre 6 et 15 la fonction retournera error.

    Math.max() permet d’obtenir la valeur maximum.
    Math.min() permet d’obtenir la valeur minimum.

    La méthode String.fromCharCode renvoie une chaîne de caractères 

    65 = a et 90 = Z (de A à Z code Ascii)
    Math.random() permet d’obtenir une valeur decimal aleatoire entre 0 et 1.
    Math.floor(nbr) permet d’obtenir le nombre nbr arrondi au dessous, s’il est decimale.
    Math.floor + Math.random = on obtient un entier aleatoire.
    les conditions et la boucle for

*/

function passwordGen(num) {
    var min = 65;
    var max = 90;
    var password = '';

    if (num > 15) {
        return 'you password need to be less than 15';
    }

    if (num < 6) {
        return 'you password need to be more than 6';
    }

    for (var i = 0; i < num; i++) {
        var index = Math.floor((Math.random() * (max - min) + min));
        password = password + String.fromCharCode(index);
    }

    return password;

}

console.log(passwordGen(8));


