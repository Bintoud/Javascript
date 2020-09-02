'use strict'

var prompt = require('prompt');

prompt.start();

function moreOrLess(nombreMystere) {
  var borneMax = 100;
  var essai;
  var nombreMystere = Math.floor(Math.random() * borneMax);
  var compteur = 1;
  while (!unEssai(nombreMystere)) {
    compteur = compteur + 1;
  }

  prompt.get({ name: 'q', description: 'quel est le nombre mystère?' }, function (
    err,
    result
  ) {

    if (result.q === 'y' || result.q === 'n') {
      console.log('Answer received');
    }
    if (essai == nombreMystere) {
      return true;
    }
    else {
      if (essai < nombreMystere) {
        console.log(essai + " moin");
      }
      else {
        if (essai > nombreMystere {
      console.log(essai + " plus ");
      }
      else {
        moreOrLess();{
    };
  } 

moreOrLess();
