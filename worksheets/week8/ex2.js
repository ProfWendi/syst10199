"use strict";

// week 8 exercise 2
document.addEventListener("DOMContentLoaded", () => {
    let div = document.body.querySelector("#exercise1");
    let span = div.querySelector("span");
    span.addEventListener("click", showHide);
    let innerDiv = div.querySelector("div");
    innerDiv.classList.add("hide");
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
