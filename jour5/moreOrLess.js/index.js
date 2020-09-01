'use strict'


var prompt = require('prompt');

prompt.start();

function nombreMistère(num) {
  
  prompt.get({ name: 'nbr', description: 'Quel est le nombre?' }, function (
    err,
    result
  ){
    if (result.nbr === num) {
      console.log('c/est ça le nombre mystère');
    } 
    else if(result.nbr) {
      console.log('plus');
    }
    else if(result.nbr) {
      console.log('moin');
    }
    else {
      nombreMistère();
    }
  });

}
      nombreMistère();


