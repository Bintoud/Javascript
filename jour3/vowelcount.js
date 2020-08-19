'use strict'

/*  1 créer une function vowelcount
    2 retourner le nombre de voyelle dans un strict 
    3 "les roses sont rouges " result 7
    "hello" =2 et Konexio = 4;
    il y a lenght , la boucle for avec une condition
*/

//var str = "les roses sont rouges"
//console.log(str.length);
// result 21

    function vowelcount(str){
        var voyelle = ['a', 'e', 'i', 'o', 'u', 'y'];
        var comptearebour = 0;

        for(var i = 0 ; i < str.length ; i++); {
        
            if(voyelle.includes(str[i])); {
                
                comptearebour = comptearebour + 1;
            }
        }
        return comptearebour;
    }

        console.log(vowelcount('les roses sont rouges'));
       