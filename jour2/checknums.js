"use strict"

var num1 = 3
var num2 = 122

function checknums(num1, num2) {

    console.log(num1, num2);

} if (num1 > num2) {

    console.log('num1 is greater than num2');

} else if (num1 < num2) {

    console.log('num1 is lower than num2');

} else (num1 === num2);

console.log('equal');

/* jai déclaré ma fonction checkNum avec pour paramètre (num1, num2);
    prenant en argument 2 numbers et qui retournera la string;
    num1 is greater than num2;
    num1 is lower than num2;
    equal;

    result : num1 is lower than num2
            equal;

            solution de konexio
function checkNums(num1, num2) {
    if (num1 == num2) {
        return 'equal';
    } else if (num1 > num2) {
        return 'num1 is greater than num2';
    } else {
        return 'num1 is lower than num2';
    }
}

console.log(checkNums(3, 122));
console.log(checkNums(5, 2));
console.log(checkNums(67, 67));
*/