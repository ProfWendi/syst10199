"use strict";
const Circle = require("../models/circle.js");

exports.renderIndex = (req, res) => {
    res.render("index", {circle: null});
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

exports.renderResult = (req, res) => {
    res.render("index", { circle: req.body.circle});
};