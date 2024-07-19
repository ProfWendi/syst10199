"use strict";

// week 8 exercise 3

document.addEventListener("DOMContentLoaded", () => {
    let divs = document.body.querySelectorAll(".collapsible");
    for (let div of divs) {
    	div.firstElementChild.onclick = showHide;
		div.lastElementChild.classList.add("hide");
    }

});

function showHide(event) {
	let innerDiv = event.target.nextElementSibling;
    if (innerDiv.classList.contains("hide")) {
        event.target.textContent = "- Hide";
    } else {
        event.target.textContent = "+ Show";
    }
    innerDiv.classList.toggle("hide");   
}