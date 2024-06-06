"use strict";

// exericse 2 week 4 worksheet

const OVERTIME = 40;
const OT_RATE = 1.5;

// function expression
let calcPay = (hours, rate) => {
	if (hours <= OVERTIME) {
  	return hours * rate;
  } else {
  	return OVERTIME * rate + (hours - OVERTIME) * (rate * OT_RATE);
  }  
}

let hours = parseFloat(prompt("Enter hours worked."));
let rate = parseFloat(prompt("Enter rate of pay."));

const totalPay = calcPay(hours, rate);

alert(`Total Pay: ${totalPay}`);

// named declared function
/*
function calcPay(hours, rate) {
	if (hours <= OVERTIME) {
  	return hours * rate;
  } else {
  	return OVERTIME * rate + (hours - OVERTIME) * (rate * OT_RATE);
  }  
}
*/