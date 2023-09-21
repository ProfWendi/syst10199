class Circle {
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
        return `Circle: radius=${this.radius}`;
    }
}
/* example that uses a constructor function, instead */
/*function Circle(radius=1) {
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
*/
module.exports.getDefaultCircle = () => {
    return new Circle();
}

module.exports.getCircle = (radius) => {
    return new Circle(radius);
}


