"use strict";

document.addEventListener("DOMContentLoaded", function() {
    let output = "";
    for (let i = 1; i < 25; i++) {
        output += `<div>${i}: ${Math.sqrt(i).toFixed(2)}<div>`;
    }
	// only use innerHTML when you have to! It's very inefficient!!!
    document.getElementById("ex5").innerHTML = output;
});