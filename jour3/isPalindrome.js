'use strict'

/*  Un paramparamètre str et retourne true sur le palindrome 
    (un texte qui se lit pareil à l’endroit comme à l’envers), 
    Ne pas utiliser la méthode Array.reverse()
*/

function palindrome(str) {

    var compteur = 0;
    for (var i = 0; i < compteur.length; i++) {

        if (compteur[i] == '0') {
            compteur[i] = compteur[i];
        }
    }
    if (str.split('').join('') === str) {
        return true;

    }
    else {
        return false

    }

}

console.log(palindrome('never odd or even'));
console.log(palindrome('eye'));

/* jai crée ma fonction avec pour parametre(str);
   Mon compteur vaut 0 / si mon index(i) vaut 0
   et qu'il est inférieur à la longueur de mon compteur (chaine de car)
   on incrémente 1 (i++);
   Dans mon bloc de note : si la valeur de mon compteur(chaine de car) est égale 0
   alors je continue ma boucle jusqu'à la fin de ma condition. return true ;

*/