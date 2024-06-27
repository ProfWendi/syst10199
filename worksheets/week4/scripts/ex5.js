"use strict";
// exercise 5 week 4


let grades = [78.5, 66, 43.9, 55.1, 82.6, 48.9];

//let points = grades.map(getPoints);
let points = grades.map( (grade) => {
if (grade >= 90) {
  	return 4.0;
  } else if (grade >= 85) {
  	return 3.8;
  } else if (grade >= 80) {
    return 3.6;
  } else if (grade >= 75) {
    return 3.3;
  } else if (grade >= 70) {
  	return 3.0;
  } else if (grade >= 65) {
 		return 2.5;
  } else if (grade >= 60) {
  	return 2.0;
  } else if (grade >= 55) {
  	return 1.5;
  } else if (grade >= 50) {
  	return 1.0;
  } else {
  	return 0.0;
  }
});
for (let i = 0; i < grades.length; i++) {
	console.log(`${grades[i].toFixed(1)} = ${points[i].toFixed(1)} points\n`);
}

/*
function getPoints(grade) {
	if (grade >= 90) {
  	return 4.0;
  } else if (grade >= 85) {
  	return 3.8;
  } else if (grade >= 80) {
    return 3.6;
  } else if (grade >= 75) {
    return 3.3;
  } else if (grade >= 70) {
  	return 3.0;
  } else if (grade >= 65) {
 		return 2.5;
  } else if (grade >= 60) {
  	return 2.0;
  } else if (grade >= 55) {
  	return 1.5;
  } else if (grade >= 50) {
  	return 1.0;
  } else {
  	return 0.0;
  }
}*/

