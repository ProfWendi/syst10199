"use strict";
// ex 2 week 5
const links = ["Previous", "Next", "Contents", "Help"];

document.addEventListener("DOMContentLoaded", () => {
    const nav = document.createElement("nav");
    for (const link of links) {
        const a = document.createElement("a");
        a.href = `${link}.html`;
        a.textContent = link;
        nav.append(a);
    }
    document.querySelector("article > h2").after(nav);

});

