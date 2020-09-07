'use strict'

function formatDateToday() {
    var now = new Date();
    console.log(now.toLocaleDateString());
}
console.log(formatDateToday());