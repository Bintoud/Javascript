'use strict'

/*Résumer: récuperer la parametre dans la variable str et retouner
  un string avec les lettres  en ordre alpha;
  exemple hello devient ehllo;
*/

 function alphabetsoup(str) {
    var result = '';
    var lettre = "z";
    for (var i = 0; i < str.lenght; i++) { 
        

    }


    return result;
  }

  console.log(alphabetsoup('Hello'));
  console.log(alphabetsoup('konexio'));
 
 
 





/* (si je fais console.log(str.split()) ça vas me faire  mon string dans un tableau;)
  1: nom de ma function alphabetsoup/ argument (str) = chaine de caractère
  2: la function va renvoyer  dans la console la chaine de caractère
  3: pour faire un reverse il faut que chaque lettre soit un index meme les espaces
     on ajoute à split un separateur(paramètre('')vide) pour créer chaque caractère sous forme d'index
     ensuite on ajoute join pour réunir les index sous forme de caractère
    il faut faire une boucle for pour l'exercice
*/


