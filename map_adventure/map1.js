'use strict'

var bdays = ['08-14', '10-04', '04-21'];

// we want a new array where the birthdays will be in the format: MM/DD
// the elem parameter will be each element from the original array
var bdays2 = bdays.map(function(elem) {
  return elem.replace('-', '/');
});

console.log(bdays2); // => ['08/14', '10/04', '04/21'] 