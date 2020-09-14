'use strict'


var arr = [{
    firstName: 'Daniel',
    surname: 'Beckham'
}, {
    firstName: 'David',
    surname: 'Craig'
}];

var arr2 = arr.map(function (key) {
    key['fullname'] = key['firstName'] + ' ' + key['surname']
        return key;
});

console.log(arr2);

/* ligne 13
 le paramètre de ma fonction key contient mon array initial
 je crée un new key qui s'appel fullname ,je lui atribu l'objet firstname et surname (concantaner)
 je return key qui contient mon array (arr) et mon new array(fullname);
*/