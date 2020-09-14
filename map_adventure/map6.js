'use strict'


var arr = [
    {
        firstName: 'Daniel',
        surname: 'Beckham'
    }, {
        firstName: 'David',
        surname: 'Craig'
    }];

var arr2 = arr.map(function (key) {
    //  return [key.firstName + ' ' + key.surname].join(" ");  // 1 façon d'appeler la clé d'un objet et sa valeur
    return key['firstName'] + ' ' + key['surname']; // 2 façon
});

console.log(arr2);

/* ligne 14
   Pour obtenir le nom complet de chaque personne de mon array
   je retourne mon array [] qui contient la valeur (cle) de mon objet
   (key est le param de ma fonction callback qui contient mon array initial
    .firstName .surname pour récupérer leur valeur(nom + prénom) je concatène
    .joint(" ") qui me renvoit mon array sous forme de carctère et utilise le séparateur )

 */

