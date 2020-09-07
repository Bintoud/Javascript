'use strict'

var prompt = require('prompt');

prompt.start();
/*
function moreOrLess(nombreMystere) {
  var borneMax = 100;
  var essai;
  var nombreMystere = Math.floor(Math.random() * borneMax);
  var compteur = 1;
  while (!moreOrLess(nombreMystere));
  compteur = compteur + 1;
}

prompt.get({ name: 'num' , decription: 'quel est le nombre mystere?'},
  function (err, result) {
    if (result.num === 
  } */



function displayPrompt() {
  // var borneMax = 100;
  //var borneMin = 1;
  var monnombre = 45;

  prompt.get({ name: 'q', description: 'quel est le nombre mystere?' }, function (
    err,
    result
  ) {

    //for (let index = 0; index < 100 || index > 1; index++) {
    //const element = Math.floor(Math.random([index]));


    if (result.q === Math.floor(Math.random()) || result.q === Math.floor(Math.random())) {
      console.log('Answer received');

    } else if (monnombre <= 100) {
      console.log('c/est moin');

    } else if (monnombre >= 1) {
      console.log('c/est plus');
    } else {
      displayPrompt();
    }
  });
}

displayPrompt(); 
