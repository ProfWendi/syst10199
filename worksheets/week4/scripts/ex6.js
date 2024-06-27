"use strict";
// exercise 6 week 4
let grades = [78.5, 66, 43.9, 55.1, 82.6, 48.9];

let sum = grades.reduce( (total, current, index) => total + current);
let avg = sum / grades.length;

console.log(`Average: ${avg.toFixed(1)}`);

