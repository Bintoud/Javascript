'use strict'

/*solution 1
var arr = [1, 2, 3, 4];

var arr2 = arr.map((el) => {    // <== je parcoure mon array et à chaque fois j'affiche mon élément(1 2 3 4)
  return el + 1;                // <== j'additionne chaque élément de l’array par 1.
});                             // => === a function / el est le paramètre de ma fonction

console.log(arr2);  */

//solution 2
var arr = [1, 2, 3, 4];
var arr2 = arr.map(function(num) { // <== je parcoure mon array et à chaque fois j'affiche mon élément
  return num + 1;                  // <== (1 2 3 4) et j'additionne chaque élément de l’array par 1.

}); 

console.log(arr2);              

/* solution 1
 ligne 6 = je crée une var qui stock mon array (var arr) 
 j'utilise mon tableau (arr) avec la méthode .map() qui vas prendre en paramètre
 une fonction de callback qui prend en parametre un num dans mon array 
 je retourne mon élément en additionnant chaque élément par 1; */