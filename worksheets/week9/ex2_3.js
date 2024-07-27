"use strict";

// week 9 exercise 2, 3

document.addEventListener("DOMContentLoaded", () => {

	const things = document.querySelectorAll("input[type=radio], input[type=checkbox]");
	document.forms.custom.numlevels.onchange = calculate;
	for (let thing of things) {
		thing.onchange = calculate;
	}
	
	// question 3: fire change events for defaults:
	let event = new Event("change");
	document.forms.custom.numlevels.dispatchEvent(event);
	// get the checked radio and dispatch event
	document.forms.custom.querySelector("input[type=radio]:checked").dispatchEvent(event);
	
	
});

function calculate(event) {
	
	// get the value of the selected radio
	const fabric = parseFloat(event.target.form.fabric.value);
	
	// get only the checked checkboxes
	const checks = document.forms.custom.querySelectorAll("input[type=checkbox]:checked");
	// sum the value of the checked accessories
	let accessoriesSum = 0;
	for (let check of checks) {
		accessoriesSum += parseFloat(check.value);
	}
	
	const total = fabric * parseFloat(event.target.form.numlevels.value) + accessoriesSum;
	
	document.forms.custom.querySelector("#total span").textContent = `$${total.toFixed(2)}`;
}