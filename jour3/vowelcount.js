'use strict'

/*  1 créer une function vowelcount;
    2 retourner le nombre de voyelle dans un strict ;
    3 "les roses sont rouges " result 7
    "hello" =2 et Konexio = 4;
    il y a lenght , la boucle for avec une condition if;
    4 la méthode tostring() = conversion d'une chaine de caractère
    5 la méthode charAt() = Retourne le caractère de la chaîne correspondant à la position indiquée 
    Le premier caractère d’une chaîne correspond à l’indice 0. Le dernier caractère correspond donc 
    à l’indice longueur - 1, soit chaine.length-1
*/


function vowelcount(str) {
    var comptearebour = 0;
  
    //methode de conversion vers une chaine;
    var string = str.toString();
  
    //la boucle parcourt la chaine de caratere , elle passe sur chaque lettre;
    for (var i = 0; i <= string.length - 1; i++) {
  
    //si c une voyelle on l'ajoute au nombre de voyelles;
      if (string.charAt(i) == "a" || string.charAt(i) == "e" ||
         string.charAt(i) == "i" || string.charAt(i) == "o" || 
         string.charAt(i) == "u") {

         comptearebour += 1;
      }
    }
    return comptearebour;
  }
  
  console.log(vowelcount("hello"));
  console.log(vowelcount("konexio"));

  