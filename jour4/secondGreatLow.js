'use strict'





function secondGreatLow(arr) {
     arr.sort(function(small, tall){
      return tall - small;
    })
    
    console.log(arr[arr.length-2])
      return arr[1];
}
  console.log(secondGreatLow([4,90])) 
  console.log(secondGreatLow([1, 42, 42, 180]))

/*
je crée ma fonction secondGreatlow qui a pour paramètre arr
j'utilise la methode sort()pour trier les éléments dans mon array 
qui seront convertis en chaine de caratères.
je fait un console log (arr) pour parcourir la longueur de mon array 
-2 */
