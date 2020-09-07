'use strict'

//var dateOfBirth = new Date("January 13, 1980 11:20:00");
//console.log(dateOfBirth.toString());
//on peut comparer les dates avec timestamp;   

/*
function getAge(dateString) {
    var today = new Date(2019/01/14);
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
} 
console.log('age: ' + getAge("1980/01/31")); */

function calcAge(dateString) {
    var birthday = +new Date(dateString);
    return ~~((Date.now() - birthday) / (31557600000));
  }
  console.log(calcAge("1980/01/31"));

 // Le nombre magique: 31557600000 est 24 * 3600 * 365.25 * 1000 Ce qui est la durée d'une année, la durée d'une année est de 365 jours et 6 heures soit 0,25 jour. En fin de compte, le résultat final nous donne l’âge final.
  

 