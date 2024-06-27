"use strict";
// ex 3 week 5


document.addEventListener("DOMContentLoaded", makeCard);


let usedNums = [];

function makeCard() {
    //let headings = ["B", "I", "N", "G", "O"];
    let headings = ["P", "Y", "T", "H", "O", "N"];
    //let limits = [ [1, 15], [16, 30], [31, 45], [46, 60], [61, 75]];
    let limits = [ [1, 12], [13, 24], [25, 36], [37, 48], [49, 60], [61, 72]];
    let free = [[2, 2]];

    let table = document.createElement("table");

    let headRow = createHeadRow(headings);
    table.append(headRow);

    for (let i = 0; i < headings.length; i++) {
        let row = createRow(headings.length, limits);
        table.append(row);
    }
    document.querySelector("header").after(table);
    
}
function createHeadRow(headings) {
    let headRow = document.createElement("tr");
    for (let head of headings) {
        let th = document.createElement("th");
        let txt = document.createTextNode(head);
        th.append(txt);
        headRow.append(th);
    }
    return headRow;
}

function createRow(numCells, limits) {
    let tr = document.createElement("tr");
    for (let j = 0; j < numCells; j++) {
        let n = getRandom(limits[j][0], limits[j][1]);
        let td = document.createElement("td");
        let nText = document.createTextNode(n);
        td.append(nText);
        tr.append(td);
    }
    return tr;
}

function getRandom(upper, lower) {
    let n = Math.floor(Math.random() * (upper - lower + 1) + lower);
    while (usedNums.indexOf(n) >= 0) {
        n = Math.floor(Math.random() * (upper - lower + 1) + lower);
    }
    return n;
}
