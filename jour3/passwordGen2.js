'use strict'

/* créer une fonction avec pour paramètre un entier compris entre 6 et 15
    qui va générer de manière aléatoire, un mot de passe de la taille de cet entier
    mot de passe retourner en lettre majuscule.
*/


function passwordGen(num) {
    var min = 65;
    var max = 90;
    var pass = '';

    if (num > 15) {
        return 'you password need to be less than 15';
    }

    if (num < 6) {
        return 'you password need to be more than 6';
    }

    for (var i = 0; i < num; i++) {
        var index = Math.floor((Math.random() * (max - min) + min));
        pass = pass + String.fromCharCode(index);
    }

    return pass;

}

console.log(passwordGen(8));
