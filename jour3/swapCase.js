'use strict'

/*  Créer une fonction ;
    utiliser le code ASCII qui correspond au majuscule (65-90) et au minuscule(97-122);
    utiliser la méthode.charCodeAt() qui retourne une chaine de cractère
    formée des codes ASCII passés en paramètres;
    conditions / boucle for
    méthode push() ajoute les paramètre passé dans le tableau et retourne la nouvelle taille du tableau complété  
    méthode join() retourne une chaine de caractères composée des éléments du tableau rassemblés par un sépparateur
    .toLowerCase() minuscule / toUpperCase() majuscule;
*/

function majuscule(maj) {

    var big = maj.charCodeAt(0);

    if (big >= 65 && big <= 90) {
        return true;

    } else {
        return false;
    }
}

function minuscule(minus) {

    var small = minus.charCodeAt(0);

    if (small >= 97 && small <= 122) {
        return true;

    } else {
        return false;
    }
}
function swapCase(str) {
    var tableau = [];

    for (var i = 0; i < str.length; i++) {

        if (majuscule(str[i])) {
            tableau.push(str[i].toLowerCase());

        }
        else if (minuscule(str[i])) {
            tableau.push(str[i].toUpperCase());

        }
        else {
            tableau.push(str[i]);
        }
    }
    return tableau.join('');
}

console.log(swapCase('Hello-LOL'));
console.log(swapCase('Konexio Developer!'));


/* j'ai mes 2 fonction majuscule et minuscule
   j'ai nommé ma variable (big / small) avec pour valeur maj/minus.charCodeAt()
   si mon compteur est >= à 65A / 97a et&& mon compteur est <+ à 90Z / 122z
   (J'ai utilisez la méthode charCodeAt() pour trouver le code ASCII d'un caractère,
   ainsi retourner une chaine de caractère;
   Dans ma 3e fonction: j'ai besoin d'un tableau pour utiliser la méthode push et join

*/