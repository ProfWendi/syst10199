"use strict";

module.exports = class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get circumference() {
        return 2 * Math.PI * this.radius;
    };
    get area() {
        return Math.PI * this.radius ** 2;
    };
}
