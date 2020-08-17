'use strict'

    var total = 0;
    var limit = 10;

    for( var i = 0; i < limit ; i++){

    total += i
}

    console.log(total);

    //for si var i = a zéro / et que i est strictement inférieur a limit(10) ce qui est le cas
    // i++ s’incrémente à chaque itération de la boucle. La boucle doit s’exécuter aussi longtemps
    // que i est strictement inférieur à limit.
    //À chaque itération(tour) de la boucle, on ajouter le nombre i à la variable total.(toal += i pareil
    // que total = total + i).result 45 
    // 1+1=2 /2+1=3/ 3+1=4/ 4+1=5/ 5+1=6/ 6+1=7/ 7+1=8/ 8+1=9/ 9+1=10 == 45
    
