'use strict'


function firstreverse (str) {

    console.log(str.split('').reverse().join());    
}

const string = "hello world and coders";

     firstreverse(string);






 
// (si je fais console.log(str.split()) ça vas me faire  mon string dans un tableau;)
 // 1: nom de ma function firstreverse/ argument (str) = chaine de caractère
 // 2: la function va renvoyer  dans la console la chaine de caractère
 // 3: pour faire un reverse il faut que chaque lettre soit un index meme les espaces
 //  on ajoute à split un separateur(paramètre('')vide) pour créer chaque caractère sous forme d'index
 // ensuite on ajoute join pour réunir les index sous forme de caractère