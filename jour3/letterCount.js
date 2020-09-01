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

//Je vais transformer ma phrase en tableau de mots

// Pour chaque mots je dois parcourir lettre par lettre et compter les lettres identique
//  Comment faire pour compter les lettres identique dans mon mots
//      Pour chaque lettres je dois enregistrer le nombres d'occurences
//          Je peux l'enregistrer dans un objet qui a pour clefs la lettre et pour valeur le nombre d'occurence 
//          Maintenant pour comparer mes compteurs d'objet, je vais additioner les valeurs sup à 1
//      Je dois stoker le nombre dans une variable
//      Ce nombre je vais le comparer avec le prochain nombre
//      Si le prochain nombre est superieur
//          Je stock le mot dans le resultat (jecrase le resultat precedent)


