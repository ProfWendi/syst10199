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
        output += `${index++}: ${n}<br>`;
    }
    document.getElementById("ex7").innerHTML = output;
});