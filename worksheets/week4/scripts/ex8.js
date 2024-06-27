"use strict";
// exercise 8 week 4
let nums = [18, 1, 43, 8, 2, 37, 22];

// version a, altering sort callback:
nums.sort((a, b) => {
    if (a < b) {
        return 1;
    } else if (a > b) {
        return -1;
    } else {
        return 0;
    }
});

// version b, using reverse with original sort callback:
/*
nums.sort((a, b) => {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
});
nums.reverse(); */
console.log(nums);
