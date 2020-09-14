'use strict'



var arr = [1, 2, 3, 4];
var arr2 = arr.map(function (num) {
    return num % 2 === 0;
});

console.log(arr2);



/* j'ai créé ma var arr2 je stock mon array (arr) avec la méthode .map,
   en paramètre() j'ai une fonction qui à num en parammètre(),
   dans mon return j'ai utiliser le modulo pour savoir si le num est pair ou impair;
*/