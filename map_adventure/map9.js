'use strict'


var arr = ['apple', 'croissant', 'pear',];

var arr2 = arr.map(function(key) {
    var fruit = '<li>' + key + '</li>'; //fruit contient la concaténation des string en html <li></li>
    return fruit;                       // et de key qui contient les valeur de mon array (arr);
});                                     // ce qui me return chaque élément de mon array + <li></li>

console.log(arr2);