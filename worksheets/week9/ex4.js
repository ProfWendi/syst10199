"use strict";

// week 9 question 3

let tipCalcHandler = {
    // percentage values
    tipPerc: [0, .1, .15, .2, .25, 99],
    // values to display in the list
    tipDisp: ["0%", "10%", "15%", "20%", "25%", "Other"],
    billAmt: 0,  // bill amount from form
    tipAmt: 0,  // calculated tip amount
    handleEvent(event) {
        if (event.type === "click") {
            const form = event.target.form;
            this.billAmt = form.billAmt.value;
            let perc = form.tipPercent.value;
            if (perc > 1) {
                perc = parseFloat(form.otherAmt.value) / 100;
            }
            
            this.tipAmt = this.calcTipAmt(perc);
            document.forms.tipCalculator.querySelector("#tipAmount").textContent 
                = this.tipAmt.toFixed(2);
        } else if (event.type == "change") {
            if (event.target.value > 1) {
                event.target.form.otherAmt.disabled = false;
            } else {
                event.target.form.otherAmt.disabled = true;
                event.target.form.otherAmt.value = "";
            }
        }
    },
    calcTipAmt(percent) {
        return this.billAmt * percent;
    }

};

document.addEventListener("DOMContentLoaded", () => {
    const tipPercDiv = document.forms.tipCalculator.querySelector("#tipPercentSelect");
    let select = document.createElement("select");
    select.name = "tipPercent";
    select.id = "tipPercent";
    select.addEventListener("change", tipCalcHandler);

    let lbl = document.createElement("label");
    lbl.setAttribute("for", select.id);
    lbl.append(document.createTextNode("Tip%:"), select);
    let index = 0;
    for (let tp of tipCalcHandler.tipPerc) {
        const opt = new Option(tipCalcHandler.tipDisp[index++], tp);
        select.append(opt);
    }    
    tipPercDiv.append(lbl);

    document.forms.tipCalculator.calc.addEventListener("click", tipCalcHandler);
    
});
