"use strict";
// week 9 exercise 1
/* NOTE: you have to clear customValidity message when change occurs on 
  drop down list in case user decides to change selection instead of 
  fixing error with qty - see changeSelection function
  
ALSO NOTE: there's still a bug in this program!  To reproduce:
change yarn type to synthetic or fibre blend
change qty to value > 5
change yarn type to natural fibre
- this should not allow a submit, but it does!
How could you fix it?
Ask me to for tips if you can't figure it out!
*/  

document.addEventListener("DOMContentLoaded", () => {
	// code from previous example
	document.forms.yarnorder.yarntype.onchange = changeSelection;
    document.forms.yarnorder.submit.onclick = validation;
		
	
	// question 1: change event on yarn type dropdown list
	document.forms.yarnorder.qty.onchange = checkYarnType;
});


function validation(event) {
	
	// from previous example
    let form = event.target.form;
    if (form.yarntype.value == "other" && form.other.value.trim().length == 0) {
        form.other.setCustomValidity("you must enter an alternative material type or select a different material type");
        form.other.reportValidity();
    } else {
        form.other.setCustomValidity("");
    }
	
    // from previous example
    if (!form.checkValidity()) {
        form.reportValidity();
        event.preventDefault();
    } 
}

// question 1: check that qty is valid when yarn type is natural fibre
function checkYarnType(event) {
	let select = event.target.form.yarntype;
	if (select.selectedIndex == 0 && event.target.value > 5) {
	    event.target.setCustomValidity("You may only purchase a maximum of 5 natural fibre yarns.");
		event.target.reportValidity();
	} else {
		event.target.setCustomValidity("");
	}	
}

// from previous example
function changeSelection(event) {
    // TODO: perhaps when other is disabled, you should 
    // remove any text in the field?
    if (event.target.value === "other") {
        document.forms[0].other.disabled = false;
    } else {
        document.forms[0].other.disabled = true;
    }
	// added for worksheet question 1:
	/*	
	If user enters an invalid qty for natural fibre, error occurs. 
	But if user decides to change selection instead of fixing qty, the 
	custom validity message is not cleared. This ensures it is 
	cleared when user changes the selection in the drop-down.
	It doesn't affect the enabling/disabling of text field above.
	*/
	event.target.form.qty.setCustomValidity("");
}