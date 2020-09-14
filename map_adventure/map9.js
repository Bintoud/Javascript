'use strict'


var arr = ['apple', 'croissant', 'pear',];

var arr2 = arr.map(function(key) {
    var fruit = '<li>' + key + '</li>';
    return fruit;
});

console.log(arr2);