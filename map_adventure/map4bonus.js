'use strict'


var arr = [1, 2, 3, 4];
var arr2 = arr.map(isEven);

function isEven(num) {
    return num % 2 === 0;
};

console.log(arr2);

/*j'ai créé ma var arr2 je stock mon array (arr) j'utilse la méthode .map,
   en paramètre() et la function isEven. j'appel la function qui me return
   si chaque élément est pair ou impair grace au modulo.,
*/