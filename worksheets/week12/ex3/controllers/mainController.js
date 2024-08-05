"use strict";
const Circle = require("../models/circle.js");

exports.renderIndex = (req, res) => {

    let radius = parseFloat(req.params.radius);
    if (!radius || radius <= 0) {
        radius = 1;
    }
    const circle = new Circle(radius);
    res.render("index", { circle: circle });
};