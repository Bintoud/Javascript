'use strict'


var arr = [{
    firstName: 'Daniel',
    surname: 'Beckham'
}, {
    firstName: 'David',
    surname: 'Craig'
}];

var arr2 = arr.map(function (key) {
    var fullname = { fullname: key['firstName'] + ' ' + key['surname'] };
    return fullname;
});

console.log(arr2);

/* ligne 13
   A l'intérieur de ma fonction j'ai créer une var fullname qui a pour valeur un objet {}
   dans laquelle je récupère et concatène les valeurs de mon array(key['firstName']+ key['surname']).

   A savoir
   si je fait un return key le result sera
[
  { firstName: 'Daniel', surname: 'Beckham' },
  { firstName: 'David', surname: 'Craig' }
]
    Avec le méthode .map() je récupère chaque élément traverser dans le paramètre de ma fonction
     ce qui me return mon new array initial car return key est juste une copie de var arr

    Tandit que si je fais un return fullname le result est
    [ { fullname: 'Daniel Beckham' }, { fullname: 'David Craig' } ]
    car dans ma var j'ai un objet qui contient les valeurs de ma key et vu que la méthode map return
    un new array avec chaque élément donc je fait un return fullname pour avoir juste ces élément là
    dans mon arra.
 */