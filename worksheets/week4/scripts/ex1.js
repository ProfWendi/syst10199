"use strict";

// exericse 1 week 4 worksheet


// named declared function
function sum(n) {
    if(n <= 0 || n > 100) {
        return 0;
    } else {
        return n * (n + 1) / 2;
    }
}

// function expression
// or you can start it like this:
// let sum = n => {
/*
let sum = function(n) {
    if(n <= 0 || n > 100) {
        return 0;
    } else {
        return n * (n + 1) / 2;
    }
}
*/
// testing
console.log(sum(10));

