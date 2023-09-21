// import the circle.js module
const Circle = require("../models/circle.js");

// render the index page when it's a get request, no circle yet
module.exports.renderIndex = (req, res) => {
    res.render("index", { circle: null });
}

// for brevity, this is included in the homeController 
// instead of its own controller
module.exports.getCircle = (req, res) => {

    if (req.body.radius) {
        req.body.circle = new Circle(req.body.radius);
    } else {
        req.body.circle = new Circle();
    }

}

// renders the index page with a circle result
module.exports.renderResult = (req, res) => {
    res.render("index", {
        circle: req.body.circle
    });
}
