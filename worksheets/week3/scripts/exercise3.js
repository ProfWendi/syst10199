"use strict";

const strBillAmt = prompt("Enter bill amount:");
const billAmt = parseFloat(strBillAmt);
if (billAmt > 0 && billAmt) {
    const strTipPercent = prompt("Enter tip percent:");
    const tipPercent = parseFloat(strTipPercent);
    if (tipPercent > 0 && tipPercent) {
        const tipAmount = tipPercent / 100 * billAmt;
        alert(`Tip Amount: \$${tipAmount.toFixed(2)}`);
    } else {
        alert("Error: Tip percentage must be a number greater than 0.");
    }
} else {
    alert("Error: Bill amount must be a number greater than 0.");
}
