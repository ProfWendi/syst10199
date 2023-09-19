// import the circle.js module
const circle = require("../models/circle.js");

// render the index page when it's a get request, no circle yet
module.exports.renderIndex = (req, res) => {
    res.render("index", { circle: null });
}

// for brevity, this is included in the homeController 
// instead of its own controller
module.exports.getCircle = (req, res) => {

    // if there's no radius, use the default circle
    if (!req.body.radius) {
        req.body.circle = circle.getDefaultCircle();
    } else { // create a circle with the input radius
        req.body.circle = circle.getCircle(req.body.radius);
    }
}

// renders the index page with a circle result
module.exports.renderResult = (req, res) => {
    res.render("index", {
        circle: req.body.circle
    });
}
