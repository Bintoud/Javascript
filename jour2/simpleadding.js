'use strict'

var number = 140;
var littlenum = 12;

function simpleadding (num) {

    var result = 0;

    for(var i = 0; i <= num; i++){

        result = result +i;
    }

    return  result;
 
}

 //   const number =140;
 //   const littlenum =12;
 //   simpleadding(number, littlenum );
  console.log(simpleadding (number, littlenum)) ;

  // je ne sais pas pourquoi ça m'affiche que le résultat de 140 alors que les deux fonctionnes ?
  
  










// 1: la méthode math.floor permet d'arrondir un nombre inférieur décimal
//     exemple : 5,9 = 5; 5,01 = 5 toujours

// 2: la méthode math.random (nbr aléatoire) permet d'avoir un nombre décimal de 0 à 1
//     0,1 / 0,2.. 1  est un nbr exclut car cette méthode ne peut pas avoir de résultat 1

// 3: j'ai créer ma fonction num avec pour parametre (min et max) :return pour retourner 
//    le nbr; ensuite on multipli math.random avec  max - min (= plage de possibilité)

// 4: console.log pour avoir un résultat compris entre 12 et 78/ 140 et 9870
