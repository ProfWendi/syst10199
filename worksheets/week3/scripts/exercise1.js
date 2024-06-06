"use strict";

let num = prompt("Enter a whole number greater than 0.");

if (num > 0 && parseInt(num)) {
    const root = Math.sqrt(num);
    alert(`Square root of ${num} is ${root.toFixed(1)}.`);
} else {
    alert("Error: you must enter a number greater than 0.");
}