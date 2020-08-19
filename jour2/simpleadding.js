'use strict'

var number = 140;
var littlenum = 12;

function simpleadding(num) {

    var result = 0;

    for (var i = 0; i <= num; i++) {

        result = result + i;
    }

    return result;

}

console.log(simpleadding(number));
console.log(simpleadding(littlenum));

 //Ecrire une  fonction(num);
 // qui additionne tout les nombres en partant de,
 // 1 jusqu'au nombre num ( donc jai une boucle for);
 // si jai pour argument 4 alors ma fonction me 
 // retournera 10 car 1 + 2 + 3 + 4 = 10; 














// 1: la méthode math.floor permet d'arrondir un nombre inférieur décimal
//     exemple : 5,9 = 5; 5,01 = 5 toujours

// 2: la méthode math.random (nbr aléatoire) permet d'avoir un nombre décimal de 0 à 1
//     0,1 / 0,2.. 1  est un nbr exclut car cette méthode ne peut pas avoir de résultat 1

// 3: j'ai créer ma fonction num avec pour parametre (min et max) :return pour retourner 
//    le nbr; ensuite on multipli math.random avec  max - min (= plage de possibilité)

// 4: console.log pour avoir un résultat compris entre 12 et 78/ 140 et 9870
