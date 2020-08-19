'use strict'



/*      Transformer chaque première lettre de chaque mot en majuscule;
        Convertir les strings a l'aide de variable en tableaux avant de les convertir en string;

        Boucle for pour parcourir chaque mot; 

        .toUpperCase pour mettre en majuscule un string;

        .length qui représente la longueur d'une chaine de caractères, exprimée en nombre;

        .substr pour retourner une sous string de l’original,
         depuis une position (index) specifié par le premier paramètre, 
         et continuant jusqu’à une certaine taille (length);

        La méthode push() ajoute un ou plusieurs éléments à la fin d'un tableau 
        et retourne la nouvelle taille du tableau;

        .joint pour crée et renvoyer une nouvelle chaîne de caractères en concaténant tous les éléments d'un tableau 
        (ou d'un objet semblable à un tableau). La concaténation utilise la virgule ou une autre chaîne, 
        fournie en argument, comme séparateur;


*/

function letterCapitalize(sentence) {

        var arraySentence = sentence.split(' ');

        var result = [];
        var first = '';
        var resto = '';

        for (var i = 0; i <= arraySentence.length - 1; i++) {

                first = arraySentence[i].substr(0, 1).toUpperCase();
                resto = arraySentence[i].substr(1, arraySentence[i].length);

                result.push(first + resto);

        }

        return result.join(' ');
}

console.log(letterCapitalize('what a wonderful world'));
console.log(letterCapitalize('bring your umbrella'));
console.log(letterCapitalize('sweet like honey green like money'));