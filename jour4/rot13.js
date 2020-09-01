"use strict"

/* Une fonction qui prend en paramètre un string;
    retourne une chaine de caractere où chaque, 
    lettre sera remplacée par la lettre 13, le a devient n.
    Si on arrive à la fin de l’alphabet, on repart du début.
    Majuscules= majuscules Z devient M et minuscules = minuscules z devient m ;
    Utiliser la table ASCII et les méthodes de String, charCodeAt et fromCharCode;
*/



// correspond au lettre Majuscule du code AScii;
function majuscule(bigg) {
    var maj = bigg.charCodeAt();

    if (maj >= 97 && maj <= 122) {
        return true;
    }
    else {
        return false;
    }
}

//correspond au lettre Minuscule du code Ascii;
function minuscule(small) {
    var min = small.charCodeAt();

    if (min >= 65 && min <= 90) {
        return true;
    }
    else {
        return false;
    }
}

//lien vers maj et minus
function rot13(str) {
    var output = ""; // sorti de ma lettre pour l'instant vide;

    for (var i = 0; i < str.length; i++) {
        var newCode = str.charCodeAt(i) + 13; // newCode contient mon charactère + 13
        

        if (newCode > 90) { // si mon new chara est supérieur à la première lettre du code ascii A 
            newCode = newCode - 26 // on le soustrait de -26 ***
        }
        if (majuscule(str[i])) {
            str[i].toUpperCase();
        }
        if (minuscule(str[i])) {
            str[i].toLowerCase();
        }
        var newLetter = newLetter.fromCharCode(newCode)// retourne le chara depuis le code ASCII
        String.fromCharCode( str.charCodeAt(0) + 1 );
        output.push(newLetter) // retourne la new taille de mon new charactère;
    }

    return output;//résultat de mon new chara
}


console.log(rot13('abc'));
console.log(rot13('My horse is Amazing.'));
console.log(rot13('AkjhZ zLKIJz , 23y'));

// ***26 est le résultat de 65 je sais pas mais vu que sa dépasse 90 et que JS ne reviens pas arrière 
// il va faire le tour jusqu'à finir l'addition. 
// un truc dans le genre