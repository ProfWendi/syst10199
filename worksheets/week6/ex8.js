"use strict";
// ex 8 week 7
document.addEventListener("DOMContentLoaded", () => {
	let nav = createNavigation();
	document.body.querySelector("header").append(nav);
});

function createNavigation() {
	let nav = document.createElement("nav");
	nav.classList.add("demo-nav");
	for (let link of navLinks) {
		let a = document.createElement("a");
		a.href = link.url;
		a.textContent = link.text;
		nav.append(a);
	}
	return nav;
}
