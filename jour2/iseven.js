'use strict'

var chif = 5;

num(chif);

function num(iseven){

     if(iseven % 13 === 0){
         console.log('true');

    }else {
        console.log('false');
    }

}

  // 1: j'ai créer une variable chif avec sa valeur 5
  // 2: j'ai créer une fonction "num" qui va afficher (chif)
  // 3: je déclare ma fonction (mot clé function) 'num' et dans le parametre ()
  //    jai écris iseven parce que je peux écrire ce que je veux (enfin je crois)
  // 4: réalisation du test : mon iseven/[ modulo/ 13] est égal à zéro
  // 5: Si jamais c égal a zéro console.log affichera true sinon ben false
  // 6: en gros le modulo c le reste de la division de (5%13)
  // apres si c'est pas ça , ben j'ai pas compris 