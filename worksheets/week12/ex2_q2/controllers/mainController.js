"use strict";

exports.renderIndex = (req, res) => {

    res.render("index", { radius: parseFloat(req.params.radius) });
};