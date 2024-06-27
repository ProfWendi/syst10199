"use strict";
// ex 7 week 6
function Student(id, firstName, lastName, program, gpa, grades) {
	this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.program = program;
  this.gpa = gpa;
  this.grades = [...grades];
  Object.defineProperty(this, "average", {
    get() {
      if (grades.length > 0) {
  	    let sum = grades.reduce( (total, grade) => total + grade);
        return sum / grades.length;
      } else {
        return 0;
      }
    }
  });
}

let grades = [89.1, 74.0, 92.5, 75.0, 85.9];
let sydney = new Student(111222333, "Sydney", "Greenstreet", "PCOMP",  4, grades);

document.addEventListener("DOMContentLoaded", () => {
	let div = document.querySelector("section > div");
  for (let key in sydney) {
        if (key == "grades")
            break;
        let txtNode = document.createTextNode(`${key}: ${sydney[key]}`);
        div.append(txtNode, document.createElement("br"));
  }
  
  div.append(document.createTextNode("Grades:"));
  let innerDiv = document.createElement("div");
  for (let grade of sydney.grades) {
        innerDiv.append(`${grade}`, document.createElement("br"));
  }
  innerDiv.style.marginLeft = ".4em";
  div.append(innerDiv);
});
