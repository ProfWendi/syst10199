"use strict";
// week 8 exercise 1

document.addEventListener("DOMContentLoaded", () => {
    let items = document.body.querySelectorAll("li");
    for (let i of items) {
        i.onclick = itemClick;
    }
    // part 2
    let button = document.body.querySelector("button");
    button.onclick = summary;
});

function itemClick(event) {
    let li = event.target;
    li.classList.toggle("selected");
}

function summary(event) {
    let items = document.body.querySelectorAll(".selected");
    let section = event.target.parentElement.nextElementSibling;
    let h3 = document.createElement("h3");
    h3.textContent = "Items you don't want in your delivery:";
    section.append(h3);
    for (let i of items) {
        let d = document.createElement("div");
        d.textContent = i.textContent;
        section.append(d);
    }
    
}