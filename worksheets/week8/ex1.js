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

/*
 for html live region:
  <!-- make this a live region so that a screen reader user is informed of updates -->
    <section aria-live="polite" aria-label="Selection Summary"></section>

    Answer to question:
    using a <ul> for a list of items to interact with is 
    not accessible to all users e.g. keyboard navigation 
    and screen readers: <ul> and <li> are not normally 
    focusable or interactive, so they violate design patterns
    and can confuse many users - many users won't realize
    they can be clicked.  Users who rely on keyboard navigation 
    can't navigate or click on them with the keyboard.

    Fix: make them focusable and interactive by adding 
    key handlers, but even better: stick with standard
    design patterns!! Eg. use a form with check boxes
    or a list of buttons - most of the functionality 
    is already built in so you don't have to add code 
    to handle keyboard navigation, for example.
*/