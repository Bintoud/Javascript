'use strict'



var prompt = require('prompt');
                                // methode pour app prompt plusieur fois.
prompt.start();

var borneMax = 100;
var borneMin = 1;
var monnombre = Math.floor(Math.random() * (borneMax - borneMin + 1)) //pour définir un nombre aléatoire entre 1 et 100;
console.log(monnombre);  

function displayPrompt() {

  prompt.get({ name: 'placeholder', description: 'quel est le nombre mystere?' }, function (
    err,
    result
  ) {

    var other
    other = parseInt(result['placeholder'])
    console.log(typeof other)

    if (other === monnombre) {
      console.log('Answer received');

    } else if (other < monnombre) {
      console.log('c/est moin');
    } else {
        console.log('c\'est plus!')
        displayPrompt();
    }
  });
}

displayPrompt();   


/*Description. La fonction parseInt() convertit le premier argument en une chaîne,
 l'analyse et renvoie un entier ou NaN . Si la valeur renvoyée n'est pas NaN , 
 ce sera l'entier représentant le nombre contenu dans la chaîne dans la base donnée.20 juil. 2019 */

/* 
var min = 1
var max = 100
var entier = Math.floor(Math.random() * (max - min + 1)) //+ min; 
console.log(entier)

var prompt = require('prompt');

prompt.start();

function displayPrompt() {

  prompt.get({ name: 'placeholder', description: 'Quel est le chiffre mystère?' }, function (err,result) 
  
  {

    var convert
    convert = parseInt(result['placeholder'])
    console.log(typeof convert)

    if (convert === entier) {
      console.log('Bravo vous avez trouvé le nombre mystère!');

    } else if (convert > entier) {
      console.log('c\'est moins!')
      displayPrompt();

    } else {
      console.log('c\'est plus!')
      displayPrompt();
    }
  });
 
}
displayPrompt();

*/


