
"use strict"



// je déclare ma variable;
var Premier = 25;
var Deuxieme = 30;

//je déclare ma fonction qui prend en paramètre 2 variables;
function swap(first, second) {
    var trois;

    // les variables intervertissent leurs valeurs respectives;
    // ce qui veut dire que first vaudra la valeurs initiale de second 
    // et vice versa
    trois = first;
    first = second;
    second = trois;

    // la fonction me retournera un array [tableau] avec pour valeurs
    // [first, second]  ; 
    return [first, second];
}

console.log(swap(Premier, Deuxieme));


