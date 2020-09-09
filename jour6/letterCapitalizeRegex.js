'use strict'

/*Transformer chaque première lettre de chaque mot en majuscule.
  Utiliser Regex . 
*/


function titleCase(str) {

  var newStr = str.toLowerCase().replace(/./,    //<== /./remplace n'importe quel charactère minus   
    (x) => x.toUpperCase()).replace(/[^']\b\w/g,       
      (y) => y.toUpperCase());

  console.log(newStr);

}

titleCase("what a wonderful world")

// [^']\b\w/g, chaque début de ma string qui ne dépasse pas ma limite de mot, 
// et qui parcourt ma chaine de caractère sera remplacer part une majuscule;