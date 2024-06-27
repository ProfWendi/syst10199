"use strict";
// ex 5 week 6

/*
function Student(id, firstName, lastName, program, gpa, grades) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.program = program;
  this.gpa = gpa;
  this.grades = grades;
}

let myGrades = [89.1, 74.0, 92.5, 75.0, 85.9];
let sydney = new Student(111222333, "Sydney", "Greenstreet", "PCOMP",  4, myGrades);
myGrades[0] = 0;
console.log(sydney);
*/
//myGrades[0] changes the grades array inside the student object

//using spread syntax:
function Student(id, firstName, lastName, program, gpa, grades) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.program = program;
  this.gpa = gpa;
  this.grades = [...grades]; // spread syntax to copy array
}

let myGrades = [89.1, 74.0, 92.5, 75.0, 85.9];
let sydney = new Student(111222333, "Sydney", "Greenstreet", "PCOMP",  4, myGrades);
myGrades[0] = 0;  // no effect on student object's grades array
console.log(sydney);

