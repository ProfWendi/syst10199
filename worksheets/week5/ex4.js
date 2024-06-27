"use strict";
// ex 4 week 5

document.addEventListener("DOMContentLoaded", () => {
    // get the paragraph
    let p = document.body.querySelector("section + p");
    let divs = document.body.querySelectorAll("div");
    
    for (let d of divs) {
        let styles = getComputedStyle(d);
        if (styles.display == "none" && styles.fontSize == "24px") {
            console.log(d);
            let t = document.createTextNode(d.textContent);
            p.append(t);
        }
    }
    
});
