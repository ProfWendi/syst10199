"use strict";

exports.renderIndex = (req, res) => {

    res.render("index", { max: req.params.max });
};