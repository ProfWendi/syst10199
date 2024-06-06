"use strict";

let score = prompt("Enter score (Q to Quit):");
let total = 0;
let numScores = 0;
let numFails = 0;
let scores = [];

while (score[0].toUpperCase() != "Q") {
    const fScore = parseFloat(score);
    if (fScore && fScore > 0) {
        scores.push(fScore);
        numScores++;
        total += fScore;
        if (fScore < 50)
            numFails++;
    }
    score = prompt("Enter next score (Q to Quit):");
}
const avg = (total > 0) ? total / scores.length : 0;

let sum = 0;
for (let s of scores) {
   sum += (s - avg) ** 2
}
const stdDev = Math.sqrt(sum / scores.length);

alert(`Total Scores Entered: ${numScores}
  Average Score: ${avg.toFixed(1)}
  Total Failures: ${numFails}
  Standard Deviation: ${stdDev.toFixed(3)}`);