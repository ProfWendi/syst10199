"use strict";
const Circle = require("../models/circle.js");

exports.renderIndex = (req, res) => {
    let circle = null;
    // if no post request was made, req.body is empty
    // so you have to check that req.body exists 
    // first (otherwise req.body.circle will crash
    // the program)
    if (req.body && req.body.circle) {
        circle = req.body.circle;
    }
    res.render("index", {circle: circle});
};

exports.getCircle = (req, res, next) => {

    let radius = parseFloat(req.body.radius);
    if (!radius || radius <= 0) {
        radius = 1;
    }
    const circle = new Circle(radius);
    req.body.circle = circle;
    next();
};
