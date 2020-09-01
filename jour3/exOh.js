"use strict"

/*  Une fonction qui prend en parametre (str);  
    retourne true s'il y a un nombre égale de x et de o
    sinon la fonction retournera false ;
    Dans le string il y aura seulement ces 2 lettres x et o;
    Indice : on peut faire une boucle qui garde le compte pour 
    chaque lettre et vérifie s'il sont égaux;
    
*/


function exOh(str) {
    var x = 0;
    var o = 0;

    for (var i = 0; i < str.length; i++) {
        console.log(str[i]);

    if (str[i] == 'x') {
            x++;

    } if (str[i] == 'o') {
            o++;
    }
    }
    if (x == o) {
        return true;

    } else {
        return false;
    }
}
console.log(exOh('xooxxo'));
console.log(exOh('x'));

/* 1: j'ai crée ma function  exOh avec pour paramètre (str);
   2: jai pour compteur 2 variables x et O avec comme valeur 0;
      Mon indice c'est ma boucle for si i est égal 0 (compteur)
      i est inférieur à la longueur de mon paramètre (condition)
      i++ on ajoute à mon compteur 1 ( incrémentation);
   3: si mon paramètre qui a pour compteur 0 est égale à x / o
      qui vaut 0  on ajoute 1 a X / o jusqu'à ce que la condition soit remplit;
   4: si x est égale à O (xooxxo meme nbr de lettre) return true sinon false( x est tout seul);
   5: enfin j'appelle ma function pour afficher le resultat;
*/


