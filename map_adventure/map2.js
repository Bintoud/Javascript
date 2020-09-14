'use strict'


var arr = [1, 2, 3, 4];
var arr2 = arr.map(function(num) {
    return num + 10;
});  

 // <== je parcoure mon array et à chaque fois j'affiche mon élément(1 2 3 4) 
console.log(arr2);  // <== et j'additionne chaque élément de l’array par 10.