'use strict'

var nombre = 3;
var mult = 3;


function powerfunciter(num, power) {
  var result = 1

  for (var i = 0; i < power; i++) {
    result *= num;

  }

  return result;

}

console.log(powerfunciter(nombre, mult));




// iterative = boucle;
// 1 déclare ma function() {}<=les accollades permettent
// de dire quels code va avoir ma function;
// var résult = a chaque (itération) tour de la boucle for
// il ajoute la multiplication dans la variable pour avoir 
// le résultat final;
// for= var i =o et que i est strictement inférieur a power on incrémente ( i= i+i );
// résult = num * result; veut dire : 3*1 premier tour (result vaut 3);
// 3*3 deuxième tour (result vaut 9 ) 3*9 troixième tour (result vaut 27);
// j'espère que c'est comme ça l'explication ;
