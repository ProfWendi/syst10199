"use strict";
// week 8 exercise 2
document.addEventListener("DOMContentLoaded", () => {
    let div = document.body.querySelector("#exercise1");
    let btn = div.querySelector("button");
    btn.addEventListener("click", showHide);
    let innerDiv = div.querySelector("div");
    innerDiv.classList.add("hide");
});

function showHide(event) {
	let innerDiv = event.target.nextElementSibling;
    if (innerDiv.classList.contains("hide")) {
        event.target.textContent = "- Hide";
        innerDiv.setAttribute("tabindex", 0);
    } else {
        event.target.textContent = "+ Show";
        innerDiv.removeAttribute("tabindex");
    }
    innerDiv.classList.toggle("hide");   
       
}

/*
HTML for live region:
<div id="exercise1"><button aria-controls="live-div">+ Show</button>
  <div role="region" aria-live="polite" id="live-div" 
  aria-label="exercise">This is some hidden content.  ...
  </div>
</div>
*/