"use strict";

document.addEventListener("DOMContentLoaded", function () {
    let frequency = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    
    for (let i = 0; i < 100; i++) {
        const n = Math.floor(Math.random() * 10);
        frequency[n]++;
    }

    let output = "";
    let index = 0;
    for (let n of frequency) {
        output += `${++index}: ${n}<br>`;
    }

    
    document.getElementById("ex7").innerHTML = output;

    const start = prompt("Enter starting value from 1 to 10:");
    const end = prompt("Enter ending value from 1 to 10:");

    if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    }

    const partial = frequency.slice(start-1, end);
    output = "<div>";
    index = start;
    for (let p of partial) {
        output += `${index++}: ${p}<br>`;
    }
    output += "</div>";
    document.getElementById("ex8").innerHTML = 
        "<p>Partial Table:</p>" + output;
});