'use strict'


/*  Ecrire une fonction qui fonctionne de manière itérative,
    qui prend un nombre (num) en paramètre, et qui nous retournera 
    la factorielle de celui ci. (e.g. si num = 4, return (4 * 3 * 2 * 1)).
    Pour vos tests, votre num sera compris entre 1 et 18, et sera toujours un entier.
    si num = 4 return 4*3*2*1 = 24;
    si num = 8*7*6*5*4*3*2*1 = 40320;
     utilise la boucle for  car on va parcourir les nombres
*/



function firstFactorial(num) {
    var result = 1;

    for (var i = 1; i <= num; i++) {

        result *= i;
    }

    return result;
}

console.log(firstFactorial(4));
console.log(firstFactorial(8));
