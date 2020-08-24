'use strict'

/*  Créer une fonction qui prend en paramètre str et search
    String d’une lettre et qui retournera le nombre de fois
    que la lettre search sera dans la phrase.
    
    utilise compteur (var), boucle for et condition;
*/


function letterCount(str, search) {
    var occurence = 0;

    for (var i = 0; i <= str.length; i++) {

        if (str[i] == search) {
            occurence++;
        }

    } return occurence;
}

console.log(letterCount('Hello apple pie', 'o'));
console.log(letterCount('Hello apple pie', 'p'));


/* 1 j'ai crée ma fonction avec 2 paramètre 
   2 j'ai mon compteur(var) à 0
   3 dans ma boucle si i = 0 (initialisation compteur)
     i est inférieur à la longueur de mon paramètre (condition)
     i++ on ajoute 1 à mon compteur (incrémentation) anisi de suite 
     jusqu'à la fin de la condition (itération = exécution de la boucle);
   4 si mon paramètre qui a pour compteur 0 est égale à search on ajoute
     à mon compteur (ocurrence) 1; puis on returne le résultat;
   5 the end j'appelle ma fonction pour voir le résultat sur ma console.
*/   

