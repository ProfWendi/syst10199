"use strict";
// ex 1 week 5
const headings = [
    "DOM Programming",
    "Accessing the DOM", 
    "Manipulating the DOM", 
    "Manipulating CSS"
];
const filler = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. "
    + "Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque "
    + " penatibus et magnis dis parturient montes, nascetur ridiculus mus. "
    + "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. "
    + "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, "
    + "aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet"
    + " a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. "
    + "Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean "
    + "vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat "
    + "vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, "
    + "feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. "
    + "Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. "
    + "Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. "
    + "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper "
    + "libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit "
    + "vel, luctus pulvinar,";

    document.addEventListener("DOMContentLoaded", () => {
        
        const main = document.querySelector("main");

        for (const hdr of headings) {
            const art = document.createElement("article");
            const h2 = document.createElement("h2");
            h2.textContent = hdr;
            const p = document.createElement("p");
            p.textContent = filler;
            art.append(h2);
            art.append(p);
            main.append(art);
        }
    });
