module.exports = class Circle {
    constructor(radius=1) {
        this.radius = radius;
    }
    get circumference() {
        return 2 * Math.PI * this.radius;
    }
    get area() {
        return Math.PI * this.radius ** 2;
    }
    toString = function() {
        return `Circle: radius=${this.radius.toFixed(1)}`;
    }
}