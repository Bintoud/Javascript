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


