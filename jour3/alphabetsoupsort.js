"use strict"

let totalLHT = 0;
let totalTVA = 0;
let totalTTC = 0;

function ecriretitre(titre){
    console.log("--" + titre + "--");
}

function articles(monarticle, prixht) {
    console.log(nomarticle + " : " + prixht + " £");
}

function calculertva(prixht) {
    let TVAENpourcent = 21;
    return prixht *TVAENpourcent / 100;
}

let prixchocolatchaudHT = 2;
let prixtarteauxpommesHT = 5;

ecriretitre("Liste d'articles v0");

articles("Chocolat chaud", prixchocolatchaudHT);
totalLHT = totalLHT + prixchocolatchaudHT;
totalTVA = totalTVA + calculertva(prixchocolatchaudHT);

articles("Tarte aux pommes", prixtarteauxpommesHT);

totalLHT = totalLHT + prixtarteauxpommesHT;
totalTVA = totalTVA + calculertva(prixtarteauxpommesHT);

ecriretitre("Montant total");

totalTTC = totalLHT + totalTVA;

console.log("Net à payer:" + totalTTC +"£");
console.log("(Dont TVA : " + totalTVA + "£ )");