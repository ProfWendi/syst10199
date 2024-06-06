"use strict";

// exericse 3 week 4 worksheet

// extra array for nicer output
const months = ["January", "February", "March", "April", "May", "June", 
	"July", "August", "September", "October", "November", "December"];
  
let isLeapYear = year => year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
let maxDaysInMonth = (month, year) => {
	switch(month) {
  	case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
    	return 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
      break;
    case 2: 
       return (isLeapYear(year)) ? 29 : 28;
       break; 
    default: 
    	return 0;
  }
};

let month = parseInt(prompt("Enter month number."));
let year = parseInt(prompt("Enter 4-digit year."));
let maxDays = maxDaysInMonth(month, year);
alert(`${months[month-1]} in ${year} has ${maxDays} days.`);
