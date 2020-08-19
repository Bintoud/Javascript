'use strict'


   var seconde = 3800;
   ​
   function timeConvert(num) {

      
      var sec = num % 60;
      var min = Math.floor((num % 3600) / 60);
      var heures = Math.floor(num / 3600);

      return heures + (':') + min + (':') + sec;
   }
   ​
   console.log(timeConvert(seconde));

      /* declare la varible
         ecrire une fonction

         on divise le nombre de minutes par 60 pour
         avoir le nombre d’heures, et pour obtenir
         le nombre de minutes restantes, on utilise le Modulo 
         
         La fonction Math.floor renvoie le plus grand entier qui est inférieur ou egal à un nombre.
         on separe le nombre d’heure du nombre
         de minute du nombre de seconde grace au symbole :
      */
    