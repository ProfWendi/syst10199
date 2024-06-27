"use strict";
// exercise 7 week 4
let nums = [18, 1, 43, 8, 2, 37, 22];
//nums.sort();  // note that this doesn't sort numerically
// this one does:
nums.sort((a, b) => {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
});
console.log(nums);

