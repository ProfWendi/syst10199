"use strict";
const Circle = require("../models/circle.js");

exports.renderIndex = (req, res) => {

    const circle = new Circle(parseFloat(req.params.radius));
    res.render("index", { circle: circle });
};