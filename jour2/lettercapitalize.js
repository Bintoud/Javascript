'use strict'



//function lettercapitalize(sentence) {
    
//   console.log( string.toUpperCase());}

 //   const string = 'sentence';

 //   lettercapitalize(string);



    function lettercapitalize(test) {

         let mot = test.toLowerCase().split(' ');
                
                let array = [];

                mot.forEach(mot => {

         let premièrelettre = mot.charAt(0).toUpperCase();

        let remplacementlettre = mot.substr(mot.charAt(0), premièrelettre);
         
                array.push(remplacementlettre);
        });
        
                console.log(mot.joint(' '));
    
}
        lettercapitalize("brIng yOur umbRella");







// .charCodeAt(3) est le code caractère t
// . la propeiété "let" permet de déclarer une variable;
// . la méthode "forEach" permet d'exécuter une fonction
 //  donnné sur chaque élément;
// . 
// .
// .