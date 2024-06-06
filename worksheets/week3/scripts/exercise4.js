"use strict";

let score = prompt("Enter score (Q to Quit):");
let total = 0;
let numScores = 0;
let numFails = 0;

while (score[0].toUpperCase() != "Q") {
    const fScore = parseFloat(score);
    if (fScore && fScore > 0) {
        numScores++;
        total += fScore;
        if (fScore < 50)
            numFails++;
    }
    score = prompt("Enter next score (Q to Quit):");
}
const avg = (total > 0) ? total / numScores : 0;
alert(`Total Scores Entered: ${numScores}
  Average Score: ${avg.toFixed(1)}
  Total Failures: ${numFails}`);