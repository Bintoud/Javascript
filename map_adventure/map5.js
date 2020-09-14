'use strict'

var arr = ['pan', 'top', 'pal', 'tool'];
var arr2 = arr.map(function(elem){            
    return elem.split("").reverse().join("");
});

console.log(arr2);

/* ligne 4/5
 le paramètre elem sera chaque élément du tableau d'origine
 arr2 doit inclure une version inversée de tous les éléments dans mon array(split). 
 Après cela, newArray doit être inversé et joint à l'espace afin d'obtenir 
 la version inversée de la chaîne d'origine.
*/