function Circle(radius) {
    this.radius = radius;
    Object.defineProperty(this, "circumference", {
        get() {
            return 2 * Math.PI * this.radius;
        }
    });
    Object.defineProperty(this, "area", {
        get() {
            return Math.PI * this.radius ** 2;
        }
    });
    this.toString = function() {
        return `Circle: radius=${this.radius}`;
    }
}

module.exports.getDefaultCircle = () => {
    return new Circle(1);
}

module.exports.getCircle = (radius) => {
    return new Circle(radius);
}


